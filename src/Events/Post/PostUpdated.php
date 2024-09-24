<?php

namespace Inovector\Mixpost\Events\Post;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Inovector\Mixpost\Contracts\WebhookEvent;
use Inovector\Mixpost\Facades\WorkspaceManager;
use Inovector\Mixpost\Http\Api\Resources\PostResource;
use Inovector\Mixpost\Models\Post;
use Inovector\Mixpost\Models\Workspace;
use Inovector\Mixpost\Support\EagerLoadPostVersionsMedia;

class PostUpdated implements WebhookEvent
{
    use Dispatchable, SerializesModels;

    public ?Workspace $currentWorkspace;
    public Post $post;

    public function __construct(Post $post)
    {
        $this->currentWorkspace = WorkspaceManager::current();
        $this->post = $post;
    }

    public static function name(): string
    {
        return 'post.updated';
    }

    public static function nameLocalized(): string
    {
        return __('mixpost::webhook.event.post.updated');
    }

    public function payload(): array
    {
//        $this->post->refresh();
        $this->post->load('accounts', 'versions', 'tags');

        EagerLoadPostVersionsMedia::apply($this->post);

        return (new PostResource($this->post))->resolve();
    }
}
