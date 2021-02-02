import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
  FaAccessibleIcon,
  FAAccessibleIcon,
  FaHeart,
  FaUserCircle,
} from 'react-icons/fa';

function NavBar(props) {
  return (
    <div>
      <h1>CitySpire</h1>
      <div>
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
