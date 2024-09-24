<?php

namespace Inovector\Mixpost\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPassword extends Notification implements ShouldQueue
{
    use Queueable;

    public string $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        $url = url(
            route('mixpost.password.reset', [
                'token' => $this->token
            ], false)
        );

        return (new MailMessage)
            ->template('mixpost::mail.notification')
            ->subject(__('mixpost::auth.reset_password_notification'))
            ->line(__('mixpost::auth.password_reset_request_received'))
            ->action(__('mixpost::auth.reset_password'), $url)
            ->line(__('mixpost::auth.password_reset_link_expiry', ['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]))
            ->line(__('mixpost::auth.no_password_reset_required'));
    }
}
