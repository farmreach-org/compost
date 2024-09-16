<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public $table = 'mixpost_tags';

    protected $fillable = [
        'name',
        'hex_color'
    ];

    protected static function booted()
    {
        static::addGlobalScope('account', function (\Illuminate\Database\Eloquent\Builder $builder) {
            /** @var \App\Models\User $user */
            $user = \Auth::guard('web')->user();
            if ($user) {
                $builder->where('account_id', '=', $user->account_id);
            }
        });
    }
}
