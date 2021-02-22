import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';

import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  console.log('render');
  console.log(userInfo);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      console.log('useEffect');
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]);

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
