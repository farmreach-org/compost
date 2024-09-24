<?php

namespace Inovector\Mixpost\Http\Api\Requests\Workspace;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inovector\Mixpost\Enums\PostStatus;
use Inovector\Mixpost\Events\Post\PostScheduled;
use Inovector\Mixpost\Events\Post\SchedulingPost;
use Inovector\Mixpost\Models\Post;
use Inovector\Mixpost\PostingSchedule;
use Inovector\Mixpost\Util;

class StorePost extends PostFormRequest
{
    protected ?Carbon $scheduledAt = null;

    public function handle()
    {
        return DB::transaction(function () {
            $record = Post::create([
                'user_id' => Auth::id(),
                'status' => PostStatus::DRAFT,
                'scheduled_at' => $this->getScheduledAt(),
            ]);

            $record->accounts()->attach($this->input('accounts', []));
            $record->tags()->attach($this->input('tags'));
            $record->versions()->createMany($this->inputVersions());

            if ($this->canSchedule()) {
                SchedulingPost::dispatch($record, $this);

                $record->setScheduled();

                $record->refresh();

                PostScheduled::dispatch($record);
            }

            return $record;
        });
    }

    protected function getScheduledAt(): ?Carbon
    {
        if ($this->scheduledAt) {
            return $this->scheduledAt;
        }

        return $this->scheduledAt = $this->input('queue')
            ? PostingSchedule::getNextScheduleDateTime()
            : ($this->input('schedule_now')
                ? Carbon::now()->utc()
                : ($this->scheduledAt() ? Util::convertTimeToUTC($this->scheduledAt(), $this->input('timezone')) : null));
    }

    protected function canSchedule(): bool
    {
        return $this->getScheduledAt() && !empty($this->input('accounts')) && ($this->input('schedule') || $this->input('schedule_now') || $this->input('queue'));
    }
}
