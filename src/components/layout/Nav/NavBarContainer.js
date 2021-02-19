import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';
import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]);

  return (
    <>
      <RenderNavbar
        userInfo={userInfo}
        authService={authService}
        authState={authState}
      />
    </>
  );
}

export default Navbar;
