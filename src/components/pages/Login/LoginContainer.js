import React, { useEffect } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { config } from '../../../utils/oktaConfig';
import citySpire from '../../../images/cityspire.svg';

import './Login.css';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

const LoginContainer = () => {
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
      logo: citySpire,
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Welcome to CitySpire, Please sign in',
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
      }
    );

    return () => widget.remove();
  }, []);

  return <div id="sign-in-widget" className="sign-in-widget" />;
};

export default LoginContainer;
