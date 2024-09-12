<?php

namespace Inovector\Mixpost\SocialProviders\Farminsta;

use App\Commands\UserCreatesReelCommand;
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
        $channel_id = $this->values['provider_id'];
        $user_id = $this->values['data']['user_id'];
        /** @var Media $media */
        $media = $media->first();

        $command = new UserCreatesReelCommand(
            $user_id,
            $media->getUrl(),
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

        $responses = event($command);
        return new SocialProviderResponse(SocialProviderResponseStatus::OK, []);
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
