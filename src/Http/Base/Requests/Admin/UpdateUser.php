<?php

namespace Inovector\Mixpost\Http\Base\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inovector\Mixpost\Concerns\UsesUserModel;

class UpdateUser extends FormRequest
{
    use UsesUserModel;

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique(app(self::getUserClass())->getTable())->ignore($this->route('user'))],
            'is_admin' => ['required', 'boolean'],
            'password' => [
                'required_if:password_confirmation,!=,',
                'confirmed',
                function ($attribute, $value, $fail) {
                    if (!empty($value)) {
                        $validator = Validator::make(
                            [$attribute => $value],
                            [$attribute => [Password::defaults()]]
                        );

                        if ($validator->fails()) {
                            $fail('The ' . $attribute . ' does not meet password requirements.');
                        }
                    }
                },
            ],
        ];
    }

    public function handle()
    {
        $user = self::getUserClass()::findOrFail($this->route('user'));

        $data = [
            'name' => $this->input('name'),
            'email' => $this->input('email'),
        ];

        if ($this->input('password')) {
            $data['password'] = Hash::make($this->input('password'));
        }

        $user->update($data);

        if ($user->id !== Auth::id()) {
            if ($user->isMixpostAdmin() && !$this->input('is_admin')) {
                $user->admin()->delete();
            }

            if (!$user->isMixpostAdmin() && $this->input('is_admin')) {
                $user->admin()->create();
            }
        }
    }
}
