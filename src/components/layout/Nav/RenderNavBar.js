import React from 'react';
import { Link } from 'react-router-dom';

import citySpire from '../../../images/cityspire.svg';

function RenderNavBar({ authService, authState, userInfo, userPic }) {
  const logout = async () => authService.logout();

  return (
    <nav>
      <Link to="/">
        <img src={citySpire} alt="CitySpire" />
      </Link>

      <div id="button-container" className="button-container">
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

        {authState.isAuthenticated &&
          (userInfo ? <span>{userInfo.name}</span> : '')}
        {authState.isAuthenticated &&
          (userInfo ? (
            <img src={userPic} alt="user pic" className="user-pic" />
          ) : (
            ''
          ))}
        {/* {authState.isAuthenticated && <button onClick={logout}>Logout</button>} */}
      </div>
    </nav>
  );
}

export default RenderNavBar;