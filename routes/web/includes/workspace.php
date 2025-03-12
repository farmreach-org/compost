<?php

use Illuminate\Support\Facades\Route;
use Inovector\Mixpost\Enums\WorkspaceUserRole;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AccountEntitiesController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AccountsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AddAccountController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AddPostToQueueController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AI\AIGenerateTextController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\AI\AIModifyTextController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\CalendarController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\DashboardController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\DeletePostsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\DuplicatePostController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\HashtagGroupsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaDownloadExternalController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaFetchGifsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaFetchStockController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaFetchUploadsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\MediaUploadFileController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\PostingScheduleController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\PostsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\ReportsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\RestorePostController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\SchedulePostController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\SocialProvider\Pinterest\StorePinterestBorderController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\SwitchWorkspaceController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\TagsController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\TemplatesApiController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\TemplatesController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\UpdateAccountSuffixController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\VariablesController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\Webhook\DeleteWebhooksController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\Webhook\ResendWebhookController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\Webhook\UpdateWebhookSecret;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\Webhook\WebhookDeliveriesController;
use Inovector\Mixpost\Http\Base\Controllers\Workspace\Webhook\WebhooksController;
use Inovector\Mixpost\Http\Base\Middleware\CheckAIConfiguration;
use Inovector\Mixpost\Http\Base\Middleware\CheckWorkspaceUser;
use Inovector\Mixpost\Http\Base\Middleware\EnsurePasswordConfirmed;
use Inovector\Mixpost\Http\Base\Middleware\HandleInertiaRequests;
use Inovector\Mixpost\Http\Base\Middleware\IdentifyWorkspace;
use Inovector\Mixpost\Mixpost;

Route::middleware(array_merge([
    IdentifyWorkspace::class,
    CheckWorkspaceUser::class
], Mixpost::getWorkspaceMiddlewares()))
    ->prefix('{workspace}')
    ->group(function () {
//        Route::get('/', DashboardController::class)->name('dashboard');
        Route::get('/', function() {
            return redirect('posts');
        })->name('dashboard');
        Route::post('switch', SwitchWorkspaceController::class)->name('switchWorkspace');
        Route::get('reports', ReportsController::class)->name('reports');

        Route::middleware(CheckWorkspaceUser::class . ':' . WorkspaceUserRole::ADMIN->name)
            ->group(function () {
                Route::prefix('accounts')->name('accounts.')->group(function () {
                    Route::get('/', [AccountsController::class, 'index'])->name('index');
                    Route::post('add/{provider}', AddAccountController::class)->name('add');
                    Route::put('update/{account}', [AccountsController::class, 'update'])->name('update');
                    Route::delete('{account}', [AccountsController::class, 'delete'])->name('delete');

                    Route::put('update-suffix/{account}', UpdateAccountSuffixController::class)->name('updateSuffix');

                    Route::prefix('entities')->name('entities.')->group(function () {
                        Route::get('{provider}', [AccountEntitiesController::class, 'index'])->name('index');
                        Route::post('{provider}', [AccountEntitiesController::class, 'store'])->name('store');
                    });
                });

                Route::prefix('posting-schedule')->name('postingSchedule.')->group(function () {
                    Route::get('/', [PostingScheduleController::class, 'index'])->name('index');
                    Route::put('/', [PostingScheduleController::class, 'update'])->name('update');
                });

                Route::prefix('webhooks')->name('webhooks.')->group(function () {
                    Route::get('/', [WebhooksController::class, 'index'])->name('index');
                    Route::get('create', [WebhooksController::class, 'create'])->name('create');
                    Route::post('store', [WebhooksController::class, 'store'])->middleware(EnsurePasswordConfirmed::class)->name('store');
                    Route::get('{webhook}', [WebhooksController::class, 'edit'])->name('edit');
                    Route::put('{webhook}', [WebhooksController::class, 'update'])->middleware(EnsurePasswordConfirmed::class)->name('update');
                    Route::delete('{webhook}', [WebhooksController::class, 'destroy'])->middleware(EnsurePasswordConfirmed::class)->name('delete');
                    Route::delete('/', DeleteWebhooksController::class)->middleware(EnsurePasswordConfirmed::class)->name('deleteMultiple');

                    Route::post('{webhook}/update-secret', UpdateWebhookSecret::class)->middleware(EnsurePasswordConfirmed::class)->name('updateSecret');

                    Route::prefix('{webhook}/deliveries')->name('deliveries.')->group(function () {
                        Route::get('/', [WebhookDeliveriesController::class, 'index'])->name('index');
                        Route::get('show/{delivery}', [WebhookDeliveriesController::class, 'show'])->name('show');
                        Route::post('resend/{delivery}', ResendWebhookController::class)->name('resend');
                    });
                });
            });

        Route::prefix('posts')->name('posts.')->group(function () {
            Route::get('/', [PostsController::class, 'index'])->name('index');
            Route::get('create/{schedule_at?}', [PostsController::class, 'create'])
                ->name('create')
                ->where('schedule_at', '^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (0\d|1\d|2[0-3]):([0-5]\d)$');
            Route::post('store', [PostsController::class, 'store'])->name('store');
            Route::get('{post}', [PostsController::class, 'edit'])->name('edit');
            Route::put('{post}', [PostsController::class, 'update'])->name('update');
            Route::delete('{post}', [PostsController::class, 'destroy'])->name('delete');

            Route::post('schedule/{post}', SchedulePostController::class)->name('schedule');
            Route::post('add-to-queue/{post}', AddPostToQueueController::class)->name('addToQueue');
            Route::post('duplicate/{post}', DuplicatePostController::class)->name('duplicate');
            Route::post('restore/{post}', RestorePostController::class)->name('restore');
            Route::delete('/', DeletePostsController::class)->name('deleteMultiple');
        });

        Route::get('calendar/{date?}/{type?}', [CalendarController::class, 'index'])
            ->name('calendar')
            ->where('date', '^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$')
            ->where('type', '^(?:month|week)$');

        Route::prefix('media')->name('media.')->group(function () {
            Route::get('/', [MediaController::class, 'index'])->name('index');
            Route::delete('/', [MediaController::class, 'destroy'])->name('delete');
            Route::get('fetch/uploaded', MediaFetchUploadsController::class)->name('fetchUploads');
            Route::get('fetch/stock', MediaFetchStockController::class)->name('fetchStock');
            Route::get('fetch/gifs', MediaFetchGifsController::class)->name('fetchGifs');
            Route::post('download', MediaDownloadExternalController::class)->name('download');
            Route::post('upload', MediaUploadFileController::class)->name('upload');
        })->withoutMiddleware(HandleInertiaRequests::class);

        Route::prefix('tags')->name('tags.')->group(function () {
            Route::post('/', [TagsController::class, 'store'])->name('store');
            Route::put('{tag}', [TagsController::class, 'update'])->name('update');
            Route::delete('{tag}', [TagsController::class, 'destroy'])->name('delete');
        });

        Route::prefix('hashtaggroups')->name('hashtaggroups.')->group(function () {
            Route::get('/', [HashtagGroupsController::class, 'index'])->name('index');
            Route::post('/', [HashtagGroupsController::class, 'store'])->name('store');
            Route::put('{hashtaggroup}', [HashtagGroupsController::class, 'update'])->name('update');
            Route::delete('{hashtaggroup}', [HashtagGroupsController::class, 'destroy'])->name('delete');
        });

        Route::prefix('variables')->name('variables.')->group(function () {
            Route::get('/', [VariablesController::class, 'index'])->name('index');
            Route::post('/', [VariablesController::class, 'store'])->name('store');
            Route::put('{variable}', [VariablesController::class, 'update'])->name('update');
            Route::delete('{variable}', [VariablesController::class, 'destroy'])->name('delete');
        });

        Route::prefix('templates')->name('templates.')->group(function () {
            Route::get('/', [TemplatesController::class, 'index'])->name('index');
            Route::get('create', [TemplatesController::class, 'create'])->name('create');
            Route::get('edit/{template}', [TemplatesController::class, 'edit'])->name('edit');

            Route::prefix('api')->name('api.')->group(function () {
                Route::get('/', [TemplatesApiController::class, 'index'])->name('index');
                Route::post('/', [TemplatesApiController::class, 'store'])->name('store');
                Route::put('{template}', [TemplatesApiController::class, 'update'])->name('update');
                Route::delete('{template}', [TemplatesApiController::class, 'destroy'])->name('delete');
            });
        });

        Route::prefix('ai')->name('ai.')
            ->middleware(array_merge([CheckAIConfiguration::class], Mixpost::getAIMiddlewares()))
            ->group(function () {
                Route::prefix('text')->name('text.')->group(function () {
                    Route::post('generate', AIGenerateTextController::class)->name('generate');
                    Route::post('modify', AIModifyTextController::class)->name('modify');
                });
            });

        Route::prefix('provider')->name('provider.')->group(function () {
            Route::prefix('pinterest')->name('pinterest.')->group(function () {
                Route::post('store-board', StorePinterestBorderController::class)->name('storeBoard');
            });
        });
    });
