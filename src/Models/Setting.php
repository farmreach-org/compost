<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Inovector\Mixpost\Facades\Settings as SettingsFacade;
use Inovector\Mixpost\Models\Scopes\CompostAccountScope;

#[ScopedBy([CompostAccountScope::class])]
class Setting extends Model
{
    public $table = 'mixpost_settings';

    protected $fillable = [
        'name',
        'payload',
        'account_id',
    ];

    protected $casts = [
        'payload' => 'array'
    ];

    public $timestamps = false;

    protected static function booted()
    {
        static::saved(function ($setting) {
            SettingsFacade::put($setting->name, $setting->payload);
        });

        static::deleted(function ($setting) {
            SettingsFacade::forget($setting->name);
        });

        static::created(function (?Setting $setting) {
            if (!$setting->account_id) {
                $accountId = '';
                $user = \Auth::guard('web')->user();
                if ($user) {
                    $accountId = $user->account_id;
                }
                $setting->account_id = $accountId;
                $setting->save();
            }
        });
    }
}
