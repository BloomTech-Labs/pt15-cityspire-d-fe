import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import { config } from '../../../utils/oktaConfig';

const LoginContainer = () => {
  const { authService } = useOktaAuth();

  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: 'path-to-your-logo',
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Welcome to Labs Basic SPA Please sign in',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      },
      ({ tokens }) => {
        // Add tokens to storage
        const tokenManager = authService.getTokenManager();
        tokenManager.add('idToken', tokens.idToken);
        tokenManager.add('accessToken', tokens.accessToken);

        // Return to the original URL (if auth was initiated from a secure route), falls back to the origin
        const fromUri = authService.getFromUri();
        window.location.assign(fromUri);
      }
    );

    return () => widget.remove();
  }, [authService]);

  return <div id="sign-in-widget" />;
};

export default LoginContainer;
