<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('mixpost_accounts', function (Blueprint $table) {
            $table->foreignUlid('account_id')->nullable()->constrained('accounts')->cascadeOnDelete();
        });
        Schema::table('mixpost_media', function (Blueprint $table) {
            $table->foreignUlid('account_id')->nullable()->constrained('accounts')->cascadeOnDelete();
        });
        Schema::table('mixpost_posts', function (Blueprint $table) {
            $table->foreignUlid('account_id')->nullable()->constrained('accounts')->cascadeOnDelete();
        });
        Schema::table('mixpost_settings', function (Blueprint $table) {
            $table->foreignUlid('account_id')->nullable()->constrained('accounts')->cascadeOnDelete();
        });
        Schema::table('mixpost_tags', function (Blueprint $table) {
            $table->foreignUlid('account_id')->nullable()->constrained('accounts')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mixpost_accounts', function (Blueprint $table) {
            $table->dropColumn(['account_id']);
        });
        Schema::table('mixpost_media', function (Blueprint $table) {
            $table->dropColumn(['account_id']);
        });
        Schema::table('mixpost_posts', function (Blueprint $table) {
            $table->dropColumn(['account_id']);
        });
        Schema::table('mixpost_settings', function (Blueprint $table) {
            $table->dropColumn(['account_id']);
        });
        Schema::table('mixpost_tags', function (Blueprint $table) {
            $table->dropColumn(['account_id']);
        });
    }
};
