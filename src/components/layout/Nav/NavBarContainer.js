import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';

import './NavbarContainer.css';
import { checkAuthentication } from '../../common';

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
