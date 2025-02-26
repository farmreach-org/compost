<?php

namespace Inovector\Mixpost\SocialProviders\Meta\Concerns;

trait ManagesFacebookOAuth
{
    public function getScopes(bool $isReadOnly) {
        if ($isReadOnly) {
            return $this->readOnlyScope ?? $this->scope;
        }
        return $this->scope;
    }

    public function getAuthUrl(bool $isReadOnly = false): string
    {
        $params = [
            'client_id' => $this->clientId,
            'redirect_uri' => $this->redirectUrl,
            'scope' => $this->getScopes($isReadOnly),
            'response_type' => 'code',
            'state' => $this->values['state']
        ];

        $url = 'https://www.facebook.com/' . $this->apiVersion . '/dialog/oauth';

        return $this->buildUrlFromBase($url, $params);
    }
}
