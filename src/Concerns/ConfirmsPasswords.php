<?php

namespace Inovector\Mixpost\Concerns;

trait ConfirmsPasswords
{
    public function confirmPassword(): void
    {
        session(['auth.password_confirmed_at' => time()]);
    }

    public function unconfirmPassword(): void
    {
        session()->forget('auth.password_confirmed_at');
    }

    protected function passwordConfirmed($maximumSecondsSinceConfirmation = null): bool
    {
        $maximumSecondsSinceConfirmation = $maximumSecondsSinceConfirmation ?: config('auth.password_timeout', 900);

        return (time() - session('auth.password_confirmed_at', 0)) < $maximumSecondsSinceConfirmation;
    }
}
