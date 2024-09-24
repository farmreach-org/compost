<?php

namespace Inovector\Mixpost\Rules;

use Illuminate\Contracts\Validation\Rule;

class HexRule implements Rule
{
    protected bool $forceFull;

    public function __construct(bool $forceFull = false)
    {
        $this->forceFull = $forceFull;
    }

    public function passes($attribute, $value)
    {
        $pattern = '/^#([a-fA-F0-9]{6}';

        if (!$this->forceFull) {
            $pattern .= '|[a-fA-F0-9]{3}';
        }

        $pattern .= ')$/';

        return (bool)preg_match($pattern, $value);
    }

    public function message()
    {
        return __('mixpost::rules.hex.code_invalid');
    }
}
