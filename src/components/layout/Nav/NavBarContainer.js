import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';
import { checkAuthentication } from '../../common';

import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  checkAuthentication(authState, authService, userInfo, setUserInfo);

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
