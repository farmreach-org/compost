<?php

namespace Inovector\Mixpost;

use Inovector\Mixpost\Abstracts\SocialProviderManager as SocialProviderManagerAbstract;
use Inovector\Mixpost\Facades\ServiceManager;
use Inovector\Mixpost\SocialProviders\Google\YoutubeProvider;
use Inovector\Mixpost\SocialProviders\Linkedin\LinkedinPageProvider;
use Inovector\Mixpost\SocialProviders\Linkedin\LinkedinProvider;
use Inovector\Mixpost\SocialProviders\Mastodon\MastodonProvider;
use Inovector\Mixpost\SocialProviders\Meta\FacebookPageProvider;
use Inovector\Mixpost\SocialProviders\Meta\InstagramProvider;
use Inovector\Mixpost\SocialProviders\Pinterest\PinterestProvider;
use Inovector\Mixpost\SocialProviders\TikTok\TikTokProvider;
use Inovector\Mixpost\SocialProviders\Twitter\TwitterProvider;

class SocialProviderManager extends SocialProviderManagerAbstract
{
    protected array $providers = [];

    public function providers(): array
    {
        if (!empty($this->providers)) {
            return $this->providers;
        }

        return $this->providers = [
            'twitter' => TwitterProvider::class,
            'facebook_page' => FacebookPageProvider::class,
            'instagram' => InstagramProvider::class,
            'mastodon' => MastodonProvider::class,
            'youtube' => YoutubeProvider::class,
            'pinterest' => PinterestProvider::class,
            'linkedin' => LinkedinProvider::class,
            'linkedin_page' => LinkedinPageProvider::class,
            'tiktok' => TikTokProvider::class,
        ];
    }

    protected function connectTwitterProvider()
    {
        $config = ServiceManager::get('twitter', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'twitter']);

        return $this->buildConnectionProvider(TwitterProvider::class, $config);
    }

    protected function connectFacebookPageProvider()
    {
        $config = ServiceManager::get('facebook', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'facebook_page']);

        return $this->buildConnectionProvider(FacebookPageProvider::class, $config);
    }

// @deprecated
// We will remove this feature soon
//    protected function connectFacebookGroupProvider()
//    {
//        $config = ServiceManager::get('facebook', 'configuration');
//
//        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'facebook_group']);
//
//        return $this->buildConnectionProvider(FacebookGroupProvider::class, $config);
//    }

    protected function connectInstagramProvider()
    {
        $config = ServiceManager::get('facebook', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'instagram']);

        return $this->buildConnectionProvider(InstagramProvider::class, $config);
    }

    protected function connectYoutubeProvider()
    {
        $config = ServiceManager::get('google', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'youtube']);

        return $this->buildConnectionProvider(YoutubeProvider::class, $config);
    }

    protected function connectPinterestProvider()
    {
        $config = ServiceManager::get('pinterest', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'pinterest']);
        $config['values'] = [
            'environment' => $config['environment'] ?? 'sandbox'
        ];

        return $this->buildConnectionProvider(PinterestProvider::class, $config);
    }

    protected function connectLinkedinProvider()
    {
        $config = ServiceManager::get('linkedin', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'linkedin']);

        return $this->buildConnectionProvider(LinkedinProvider::class, $config);
    }

    protected function connectLinkedinPageProvider()
    {
        $config = ServiceManager::get('linkedin', 'configuration');

        if (!LinkedinProvider::hasCommunityManagementProduct()) {
            abort(403);
        }

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'linkedin_page']);

        return $this->buildConnectionProvider(LinkedinPageProvider::class, $config);
    }

    protected function connectTiktokProvider()
    {
        $config = ServiceManager::get('tiktok', 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'tiktok']);

        return $this->buildConnectionProvider(TikTokProvider::class, $config);
    }

    protected function connectMastodonProvider()
    {
        $request = $this->container->request;
        $sessionServerKey = "{$this->config->get('mixpost.cache_prefix')}.mastodon_server";

        if ($request->route() && $request->route()->getName() === 'mixpost.accounts.add') {
            $serverName = $this->container->request->input('server');
            $request->session()->put($sessionServerKey, $serverName); // We keep the server name in the session. We'll need it in the callback
        } else if ($request->route() && $request->route()->getName() === 'mixpost.callbackSocialProvider') {
            $serverName = $request->session()->get($sessionServerKey);
        } else {
            $serverName = $this->values['data']['server']; // Get the server value that have been set on SocialProviderManager::connect($provider, array $values = [])
        }

        $config = ServiceManager::get("mastodon.$serverName", 'configuration');

        $config['redirect'] = route('mixpost.callbackSocialProvider', ['provider' => 'mastodon']);
        $config['values'] = [
            'data' => ['server' => $serverName]
        ];

        return $this->buildConnectionProvider(MastodonProvider::class, $config);
    }
}
