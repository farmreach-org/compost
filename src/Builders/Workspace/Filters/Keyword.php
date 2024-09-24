<?php

namespace Inovector\Mixpost\Builders\Workspace\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Inovector\Mixpost\Contracts\Filter;

class Keyword implements Filter
{
    public static function apply(Builder $builder, $value): Builder
    {
        $lowerValue = Str::lower($value);

        return $builder->where('name', 'LIKE', '%' . $lowerValue . '%');
    }
}
