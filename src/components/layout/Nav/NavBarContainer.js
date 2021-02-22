import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';

import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  async function checkAuthentication() {
    const authenticated = await authState.isAuthenticated;
    if (authenticated === authState.isAuthenticated) {
      if (authenticated && !userInfo) {
        const info = await authService.getUser();
        setUserInfo(info);
      }
    }
  }
  checkAuthentication();

  return (
    <div>
      <RenderNavbar
        userInfo={userInfo}
        authService={authService}
        authState={authState}
      />
    </div>
  );
}

export default Navbar;
