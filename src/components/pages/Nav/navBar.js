import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import './navCSS.css';

function NavBar(props) {
  return (
    <div class="navBar">
      <Link to="/">
        <h1>CitySpire</h1>
      </Link>
      <div class="navLinks">
        <Link to="/profile-list" class="users">
          <FaUserCircle size="30px" />
          <div class="user">
            <p>User</p>
          </div>
        </Link>
        <Link to="/example-list" class="favorites">
          <FaHeart size="30px" />
          <div class="heart">
            <p>Favorites</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
