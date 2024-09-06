<?php

namespace Inovector\Mixpost\SocialProviders;

use Closure;
use Illuminate\Support\Collection;
use Inovector\Mixpost\Abstracts\SocialProvider;
use Inovector\Mixpost\Enums\SocialProviderResponseStatus;
use Inovector\Mixpost\Http\Resources\AccountResource;
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
