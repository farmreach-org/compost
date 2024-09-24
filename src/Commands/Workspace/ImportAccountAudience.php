<?php

namespace Inovector\Mixpost\Commands\Workspace;

use Illuminate\Console\Command;
use Inovector\Mixpost\Concerns\Command\AccountsOption;
use Inovector\Mixpost\SocialProviders\Mastodon\Jobs\ImportMastodonFollowersJob;
use Inovector\Mixpost\SocialProviders\Meta\Jobs\ImportFacebookPageFollowersJob;
use Inovector\Mixpost\SocialProviders\Meta\Jobs\ImportInstagramFollowersJob;
use Inovector\Mixpost\SocialProviders\Pinterest\Jobs\ImportPinterestFollowersJob;
use Inovector\Mixpost\SocialProviders\TikTok\Jobs\ImportTikTokFollowersJob;
use Inovector\Mixpost\SocialProviders\Twitter\Jobs\ImportTwitterFollowersJob;
use Inovector\Mixpost\SocialProviders\Linkedin\Jobs\ImportLinkedinPageFollowersJob;

class ImportAccountAudience extends Command
{
    use AccountsOption;

    public $signature = 'mixpost:import-account-audience {--accounts=}';

    public $description = 'Import audience(count of followers, fans...etc.) for the social providers';

    public function handle(): int
    {
        $this->accessibleAccounts()->each(function ($account) {
            $job = match ($account->provider) {
                'twitter' => ImportTwitterFollowersJob::class,
                'facebook_page' => ImportFacebookPageFollowersJob::class,
                'instagram' => ImportInstagramFollowersJob::class,
                'mastodon' => ImportMastodonFollowersJob::class,
                'pinterest' => ImportPinterestFollowersJob::class,
                'tiktok' => ImportTikTokFollowersJob::class,
                'linkedin_page' => ImportLinkedinPageFollowersJob::class,
                default => null,
            };

            if ($job) {
                $job::dispatch($account);
            }
        });

        return self::SUCCESS;
    }
}
