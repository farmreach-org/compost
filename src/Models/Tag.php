<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Inovector\Mixpost\Models\Scopes\CompostAccountScope;

#[ScopedBy([CompostAccountScope::class])]
class Tag extends Model
{
    use HasFactory;

    public $table = 'mixpost_tags';

    protected $fillable = [
        'name',
        'hex_color',
        'account_id',
    ];

    protected static function booted()
    {
        static::created(function (?Tag $tag) {
            if (!$tag->account_id) {
                $accountId = '';
                $user = \Auth::guard('web')->user();
                if ($user) {
                    $accountId = $user->account_id;
                }
                $tag->account_id = $accountId;
                $tag->save();
            }
        });
    }
}
