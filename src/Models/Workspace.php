<?php

namespace Inovector\Mixpost\Models;

use Closure;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use Inovector\Mixpost\Concerns\Model\HasUuid;
use Inovector\Mixpost\Concerns\UsesUserModel;
use Inovector\Mixpost\Enums\WorkspaceUserRole;
use Inovector\Mixpost\Facades\WorkspaceManager;

/**
 * Inovector\Mixpost\Models\Workspace
 *
 * @property int $id
 * @property string $uuid
 * @property string $name
 * @property string $hex_color
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $account_id
 * @property-read \App\Models\Account|null $account
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Inovector\Mixpost\Database\Factories\WorkspaceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace query()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace recentlyUpdated()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereAccountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereHexColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereUuid($value)
 * @mixin \Eloquent
 */
class Workspace extends Model
{
    use HasFactory;
    use HasUuid;
    use UsesUserModel;

    public $table = 'mixpost_workspaces';

    protected $fillable = [
        'uuid',
        'name',
        'hex_color'
    ];

    public function execute(Closure $closure): mixed
    {
        $originalWorkspace = WorkspaceManager::current();

        WorkspaceManager::setCurrent($this);

        $result = $closure($this);

        if ($originalWorkspace) {
            WorkspaceManager::setCurrent($originalWorkspace);
        }

        if (!$originalWorkspace) {
            WorkspaceManager::forgetCurrent();
        }

        return $result;
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(self::getUserClass(), 'mixpost_workspace_user', 'workspace_id', 'user_id')
            ->withPivot('role', 'joined');
    }

    public function scopeRecentlyUpdated($query): void
    {
        $query->latest('updated_at');
    }

    public function attachUser($id = null, WorkspaceUserRole $role = WorkspaceUserRole::MEMBER): void
    {
        $this->users()->attach($id, [
            'role' => $role,
            'joined' => Carbon::now('UTC')
        ]);
    }

    public function account() : BelongsTo {
        return $this->belongsTo(\App\Models\Account::class);
    }

    public function valid(): bool
    {
        return true;
    }
}
