<?php

namespace Inovector\Mixpost\Http\Base\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inovector\Mixpost\Mixpost;

class EnterpriseConsoleRedirects
{
    public function handle(Request $request, Closure $next)
    {
        if (!Mixpost::getEnterpriseConsoleUrl()) {
            return $next($request);
        }

        // Workspaces
        if ($request->routeIs('mixpost.workspaces.create')) {
            return redirect()->to(Mixpost::getEnterpriseConsoleUrl() . '/workspaces/create');
        }

        if ($request->routeIs('mixpost.workspaces.*')) {
            return redirect()->to(Mixpost::getEnterpriseConsoleUrl() . '/workspaces');
        }

        // Users
        if ($request->routeIs('mixpost.users.create')) {
            return redirect()->to(Mixpost::getEnterpriseConsoleUrl() . '/users/create');
        }

        if ($request->routeIs('mixpost.users.*')) {
            return redirect()->to(Mixpost::getEnterpriseConsoleUrl() . '/users');
        }

        return $next($request);
    }
}
