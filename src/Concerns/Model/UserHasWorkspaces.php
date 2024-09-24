<?php

namespace Inovector\Mixpost\Concerns\Model;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Inovector\Mixpost\Concerns\UsesWorkspaceModel;
use Inovector\Mixpost\Enums\WorkspaceUserRole;

trait UserHasWorkspaces
{
    use UsesWorkspaceModel;

    public function workspaces(): BelongsToMany
    {
        return $this->belongsToMany(self::getWorkspaceModelClass(), 'mixpost_workspace_user', 'user_id', 'workspace_id')
            ->withPivot('role', 'joined');
    }

    public function hasWorkspace(int $id, ?WorkspaceUserRole $role = null): bool
    {
        return $this->workspaces()->where('workspace_id', $id)->when($role, function ($query) use ($role) {
            $query->where('mixpost_workspace_user.role', $role->value);
        })->exists();
    }
}
