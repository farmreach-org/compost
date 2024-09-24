<?php

namespace Inovector\Mixpost\Builders\Post\Filters;

use Illuminate\Database\Eloquent\Builder;
use Inovector\Mixpost\Contracts\Filter;
use Inovector\Mixpost\Enums\PostStatus as PostStatusEnum;

class PostStatus implements Filter
{
    public static function apply(Builder $builder, $value): Builder
    {
        if ($value === 'trash') {
            return $builder->onlyTrashed();
        }

        $status = match ($value) {
            'draft' => PostStatusEnum::DRAFT->value,
            'scheduled' => PostStatusEnum::SCHEDULED->value,
            'published' => PostStatusEnum::PUBLISHED->value,
            'failed' => PostStatusEnum::FAILED->value,
            default => null
        };

        if ($status === null) {
            return $builder;
        }

        return $builder->where('status', $status);
    }
}
