import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUserCircle } from 'react-icons/fa';

import './navCSS.css';

function NavBar(props) {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>CitySpire</h1>
      </Link>
      <div className="navLinks">
        <Link to="/profile-list" className="users">
          <FaUserCircle size="30px" />
          <div className="user">
            <p>User</p>
          </div>
        </Link>
        <Link to="/example-list" className="favorites">
          <FaHeart size="30px" />
          <div className="heart">
            <p>Favorites</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
