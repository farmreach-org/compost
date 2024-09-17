<?php

namespace Inovector\Mixpost\Actions;

use App\Models\Channel;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Inovector\Mixpost\Models\Account;
use Inovector\Mixpost\Support\MediaUploader;

class UpdateOrCreateAccount
{
    public function __invoke(string $providerName, array $account, array $accessToken): void
    {
        /** @var User $user */
        $user = auth('web')->user();
        $userId = '';
        $channelId  = '';
        $accountId = '';
        if ($user) {
            $accountId = $user->account_id;
            $userId = $user->id;
            $channelId = Channel::whereAccountId($accountId)->first()?->id ?: 0;
        }
        Account::updateOrCreate(
            [
                'provider' => $providerName,
                'provider_id' => $account['id']
            ],
            [
                'name' => $account['name'],
                'username' => $account['username'] ?? null,
                'media' => $this->media($account['image'], $providerName),
                'data' => array_merge($account['data'] ?? [], ['channel_id' => $channelId, 'user_id' => $userId]),
                'access_token' => $accessToken,
                'account_id' => $accountId,
            ]
        );
    }

    protected function media(string|null $imageUrl, string $providerName): array|null
    {
        if (!$imageUrl) {
            return null;
        }

        $info = pathinfo($imageUrl);
        $contents = file_get_contents($imageUrl);
        $file = '/tmp/' . Str::random(32);
        file_put_contents($file, $contents);

        $file = new UploadedFile($file, $info['basename']);
        $path = "mixpost/avatars/$providerName";

        $upload = MediaUploader::fromFile($file)->path($path)->upload();

        return [
            'disk' => $upload['disk'],
            'path' => $upload['path']
        ];
    }
}
