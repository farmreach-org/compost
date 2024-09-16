<?php

namespace Inovector\Mixpost\SocialProviders\Farminsta;

use App\Commands\UserCreatesReelCommand;
use App\Models\Reel;
use App\Services\LinkService;
use Closure;
use Illuminate\Support\Collection;
use Inovector\Mixpost\Abstracts\SocialProvider;
use Inovector\Mixpost\Enums\SocialProviderResponseStatus;
use Inovector\Mixpost\Http\Resources\AccountResource;
use Inovector\Mixpost\Models\Media;
use Inovector\Mixpost\Support\SocialProviderResponse;

class FarminstaProvider extends SocialProvider
{

    public function getAuthUrl(): string
    {
        return "";
    }

    public function requestAccessToken(array $params): array
    {
        return [];
    }

    public function buildResponse($response, Closure $okResult = null): SocialProviderResponse
    {
        return new SocialProviderResponse(SocialProviderResponseStatus::OK, []);
    }

    public function getAccount(): SocialProviderResponse
    {
        return new SocialProviderResponse(SocialProviderResponseStatus::OK, []);
    }

    public function publishPost(string $text, Collection $media, array $params = []): SocialProviderResponse
    {
        \Log::error(json_encode([
            $text,
            $media,
            $media->first()->getUrl(),
            $params,
            $this->values,
        ], JSON_PRETTY_PRINT));


        $channel_id = $this->values['provider_id'];
        $user_id = $this->values['data']['user_id'];
        $link = app()->make(LinkService::class)->generateLink($user_id, 'https://app.farminsta.com/', 'invite')->getFullUrl();

        /** @var Media $video */
        $video = $media->first();

        $command = new UserCreatesReelCommand(
            $user_id,
            $video->getUrl(),
            'Mixpost title',
            $text,
            '#farminsta',
            1,
            null,
            'en_in',
            null,
            null,
            true,
            true,
            true,
            true,
            true,
            true,
            0,
            0,
            null,
            null,
            null,
            [],
            $channel_id,
            false,
        );

        $responses = \Event::dispatch($command);
        $reel = Reel::whereS3Path($video->getUrl())->first();
        \Log::error(json_encode($responses));
        \Log::error(json_encode($media));
        \Log::error(json_encode($reel));
        return new SocialProviderResponse(SocialProviderResponseStatus::OK, [
            'id' => $reel?->id,
        ]);
    }

    public function deletePost($id): SocialProviderResponse
    {
        return new SocialProviderResponse(SocialProviderResponseStatus::OK, []);
    }

    public static function externalPostUrl(AccountResource $accountResource): string
    {
        return '';
    }
}
