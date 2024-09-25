<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Inovector\Mixpost\Casts\AccountMediaCast;
use Inovector\Mixpost\Casts\EncryptArrayObject;
use Inovector\Mixpost\Concerns\Model\HasUuid;
use Inovector\Mixpost\Concerns\OwnedByWorkspace;
use Inovector\Mixpost\Contracts\SocialProvider;
use Inovector\Mixpost\Facades\SocialProviderManager;
use Inovector\Mixpost\SocialProviders\Mastodon\MastodonProvider;
use Inovector\Mixpost\Support\AccountSuffix;
use Inovector\Mixpost\Support\SocialProviderPostConfigs;

/**
 * Inovector\Mixpost\Models\Account
 *
 * @property int $id
 * @property string $uuid
 * @property int $workspace_id
 * @property string $name
 * @property string|null $username
 * @property $media
 * @property string $provider
 * @property string $provider_id
 * @property array|null $data
 * @property bool $authorized
 * @property \Illuminate\Database\Eloquent\Casts\ArrayObject $access_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Inovector\Mixpost\Models\Workspace|null $workspace
 * @method static Builder|Account byWorkspace(\Illuminate\Database\Eloquent\Model|int $workspace)
 * @method static \Inovector\Mixpost\Database\Factories\AccountFactory factory($count = null, $state = [])
 * @method static Builder|Account newModelQuery()
 * @method static Builder|Account newQuery()
 * @method static Builder|Account provider(\Inovector\Mixpost\Contracts\SocialProvider|string $provider)
 * @method static Builder|Account query()
 * @method static Builder|Account whereAccessToken($value)
 * @method static Builder|Account whereAuthorized($value)
 * @method static Builder|Account whereCreatedAt($value)
 * @method static Builder|Account whereData($value)
 * @method static Builder|Account whereId($value)
 * @method static Builder|Account whereMedia($value)
 * @method static Builder|Account whereName($value)
 * @method static Builder|Account whereProvider($value)
 * @method static Builder|Account whereProviderId($value)
 * @method static Builder|Account whereUpdatedAt($value)
 * @method static Builder|Account whereUsername($value)
 * @method static Builder|Account whereUuid($value)
 * @method static Builder|Account whereWorkspaceId($value)
 * @mixin \Eloquent
 */
class Account extends Model
{
    use HasFactory;
    use HasUuid;
    use OwnedByWorkspace;

    protected $table = 'mixpost_accounts';

    protected $fillable = [
        'uuid',
        'name',
        'username',
        'media',
        'provider',
        'provider_id',
        'data',
        'authorized',
        'access_token'
    ];

    protected $casts = [
        'media' => AccountMediaCast::class,
        'data' => 'array',
        'authorized' => 'boolean',
        'access_token' => EncryptArrayObject::class
    ];

    protected $hidden = [
        'access_token'
    ];

    protected ?string $providerClass = null;

    protected static function booted()
    {
        static::updated(function ($account) {
            if ($account->wasChanged('media') && Arr::has($account->getOriginal('media'), 'disk')) {
                Storage::disk($account->getOriginal('media')['disk'])->delete($account->getOriginal('media')['path']);
            }
        });

        static::deleted(function ($account) {
            if ($account->media && Arr::has($account->media, 'disk')) {
                Storage::disk($account->media['disk'])->delete($account->media['path']);
            }
        });
    }

    public function scopeProvider(Builder $query, string|SocialProvider $provider): void
    {
        $query->where('provider', $provider instanceof SocialProvider ? $provider->identifier() : $provider);
    }

    public function suffix(): string
    {
        return AccountSuffix::getValue($this->data ?? []);
    }

    public function image(): ?string
    {
        if ($this->media) {
            return Storage::disk($this->media['disk'])->url($this->media['path']);
        }

        return null;
    }

    public function values(): array
    {
        return [
            'account_id' => $this->id,
            'provider_id' => $this->provider_id,
            'provider' => $this->provider,
            'name' => $this->name,
            'username' => $this->username,
            'data' => $this->data
        ];
    }

    public function getProviderClass()
    {
        if ($this->providerClass) {
            return $this->providerClass;
        }

        return $this->providerClass = SocialProviderManager::providers()[$this->provider] ?? null;
    }

    public function relationships(): array
    {
        return Arr::get($this->data, 'relationships', []);
    }

    public function providerName(): string
    {
        if (!$provider = $this->getProviderClass()) {
            return $this->provider;
        }

        return $provider::name();
    }

    public function postConfigs(): array
    {
        if (!$provider = $this->getProviderClass()) {
            return SocialProviderPostConfigs::make()->jsonSerialize();
        }

        return $provider::postConfigs()->jsonSerialize();
    }

    public function isServiceActive(): bool
    {
        if (!$this->getProviderClass()) {
            return false;
        }

        if ($this->getProviderClass() === MastodonProvider::class) {
            return true;
        }

        return $this->getProviderClass()::service()::isActive();
    }

    public function isAuthorized(): bool
    {
        return $this->authorized;
    }

    public function isUnauthorized(): bool
    {
        return !$this->authorized;
    }

    public function setUnauthorized(): void
    {
        $this->authorized = false;
        $this->save();
    }

    public function setAuthorized(): void
    {
        $this->authorized = true;
        $this->save();
    }

    public function updateAccessToken(array $data): void
    {
        $this->access_token = $data;

        $this->save();
    }
}
