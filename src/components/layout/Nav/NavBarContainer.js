import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNavbar from './RenderNavbar';
import { checkAuthentication } from '../../common';
import { userAvatar } from '../../../api';

import './NavbarContainer.css';

function Navbar() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [userPic, setUserPic] = useState('');

  useEffect(() => {
    checkAuthentication(authState, authService, userInfo, setUserInfo);
    userAvatar().then(res => {
      const pic = res.results[0].picture.thumbnail;
      setUserPic(pic);
    });
  }, [authState, authService, userInfo, setUserInfo]);

  return (
    <div>
      <RenderNavbar
        userInfo={userInfo}
        authService={authService}
        authState={authState}
        userPic={userPic}
      />
    </div>
  );
}

export default Navbar;
