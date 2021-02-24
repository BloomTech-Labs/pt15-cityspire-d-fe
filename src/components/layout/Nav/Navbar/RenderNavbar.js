import React from 'react';
import { Link } from 'react-router-dom';

import citySpire from '../../../../images/cityspire.svg';
import { DropdownMenu } from '../../Nav';

function RenderNavBar({ authState, userInfo, userPic, logout }) {
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={citySpire} alt="CitySpire" />
        </div>
      </Link>

      <div className="button-container">
        {!authState.isPending && !authState.isAuthenticated && (
          <Link to="/login">
            <button>login</button>
          </Link>
        )}
        {!authState.isPending && !authState.isAuthenticated && (
          <Link to="#">
            <button>Sign Up</button>
          </Link>
        )}

        <DropdownMenu
          authState={authState}
          userInfo={userInfo}
          userPic={userPic}
          logout={logout}
        />
      </div>
    </nav>
  );
}

export default RenderNavBar;
