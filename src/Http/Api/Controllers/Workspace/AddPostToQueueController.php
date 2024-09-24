<?php

namespace Inovector\Mixpost\Http\Api\Controllers\Workspace;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Inovector\Mixpost\Http\Api\Requests\Workspace\AddPostToQueue;

class AddPostToQueueController extends Controller
{
    public function __invoke(AddPostToQueue $addPostToQueue): JsonResponse
    {
        $scheduledPost = $addPostToQueue->handle();

        return response()->json([
            'success' => true,
            'scheduled_at' => $scheduledPost->scheduled_at->toDateTimeString()
        ]);
    }
}
