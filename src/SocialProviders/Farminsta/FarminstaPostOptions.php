<?php

namespace Inovector\Mixpost\SocialProviders\Farminsta;

use Illuminate\Support\Arr;
use Inovector\Mixpost\Contracts\SocialProviderPostOptions;

class FarminstaPostOptions implements SocialProviderPostOptions
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:200'],
            'category_id' => ['required'],
            'language' => ['required'],
        ];
    }

    public function map(array $options = []): array
    {
        return [
            'title' => Arr::get($options, 'title', ''),
            'description' => Arr::get($options, 'description', ''),
            'category_id' => Arr::get($options, 'category_id', '1'),
            'language' => Arr::get($options, 'language', 'en_in'),
        ];
    }
}
