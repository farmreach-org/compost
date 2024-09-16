<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Model;
use Inovector\Mixpost\Facades\Settings as SettingsFacade;

class Setting extends Model
{
    public $table = 'mixpost_settings';

    protected $fillable = [
        'name',
        'payload'
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

        static::addGlobalScope('account', function (\Illuminate\Database\Eloquent\Builder $builder) {
            /** @var \App\Models\User $user */
            $user = \Auth::guard('web')->user();
            if ($user) {
                \Log::error('Scoping settings to account_id=' . $user->account_id);
                $builder->where('account_id', '=', $user->account_id);
            }
        });
    }
}
