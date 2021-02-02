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
        <Link to="/profile-list">
          <FaUserCircle size="30px" />
        </Link>
        <Link to="/example-list">
          <FaHeart size="30px" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
