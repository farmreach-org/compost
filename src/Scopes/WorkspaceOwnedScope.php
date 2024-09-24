<?php

namespace Inovector\Mixpost\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Inovector\Mixpost\Facades\WorkspaceManager;
use Inovector\Mixpost\Util;

class WorkspaceOwnedScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        /** Ignore this scope on Horizon request **/
        if (!Util::isHorizonRequest()) {
            $builder->where('workspace_id', '=', WorkspaceManager::current()->id);
        }
    }

    public function extend(Builder $builder): void
    {
        $this->addWithoutWorkspace($builder);
    }

    protected function addWithoutWorkspace(Builder $builder): void
    {
        $builder->macro('withoutWorkspace', function (Builder $builder) {
            return $builder->withoutGlobalScope($this);
        });
    }
}
