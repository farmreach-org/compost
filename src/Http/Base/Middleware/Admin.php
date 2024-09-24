<?php

namespace Inovector\Mixpost\Http\Base\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::user()->isMixpostAdmin()) {
            return redirect()->route('mixpost.home');
        }

        return $next($request);
    }
}
