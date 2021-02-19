import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavBar from './RenderNavBar';
import './NavBarContainer.css';

function NavBar() {
  const { authState, authService } = useOktaAuth();
  console.log('useOktaAuth', useOktaAuth);

  return (
    <>
      <RenderNavBar
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

export default NavBar;
