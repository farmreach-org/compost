<?php

namespace Inovector\Mixpost\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class CompostAccountScope implements Scope
{

    public function apply(Builder $builder, Model $model): void
    {
        /** @var \App\Models\User $user */
        $user = \Auth::guard('web')->user();
        if ($user) {
            $builder->where($model->getTable() . '.account_id', '=', $user->account_id);
        }
    }
}
