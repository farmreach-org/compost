<?php

namespace Inovector\Mixpost\Http\Base\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inovector\Mixpost\Enums\WorkspaceUserRole;
use Inovector\Mixpost\Facades\WorkspaceManager;

class CheckWorkspaceUser
{
    public function handle(Request $request, Closure $next, ?string $role = null)
    {
        if (Auth::user()
            ->hasWorkspace(
                WorkspaceManager::current()->id,
                $role ? WorkspaceUserRole::fromName($role) : null
            )
        ) {
            return $next($request);
        }

        if (!$request->expectsJson()) {
            abort(403);
        }

        return response()->json([
            'message' => 'Access forbidden.',
        ], 403);
    }
}
