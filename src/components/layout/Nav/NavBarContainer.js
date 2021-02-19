import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavBar';
import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  console.log('useOktaAuth', useOktaAuth);

  return (
    <>
      <RenderNavbar
        // userInfo={userInfo}
        authService={authService}
        authState={authState}
      />
      {/* {authState.isAuthenticated && userInfo && (
        <RenderNavBar userInfo={userInfo} authService={authService} />
      )} */}
    </>
  );
}

export default Navbar;
