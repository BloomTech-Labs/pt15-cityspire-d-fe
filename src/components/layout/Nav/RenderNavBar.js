import React from 'react';
import { Link } from 'react-router-dom';

import citySpire from '../../../images/cityspire.svg';

function RenderNavBar(props) {
  console.log(props);
  const { authService, authState } = props;
  return (
    <nav>
      <Link to="/">
        <img src={citySpire} alt="CitySpire" />
      </Link>

      <div className="button-container">
        {!authState.isAuthenticated && (
          <>
            <Link to="/login">
              <button>login</button>
            </Link>

            <Link to="#">
              <button>Sign Up</button>
            </Link>
          </>
        )}

        {authState.isAuthenticated && (
          <button onClick={() => authService.logout()}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default RenderNavBar;
