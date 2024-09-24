<?php

namespace Inovector\Mixpost\Contracts;

use Inovector\Mixpost\Enums\WebhookType;

interface WebhookEvent
{
    public static function name(): string;

    public static function nameLocalized(): string;

    public function payload(): array;
}
