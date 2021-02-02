import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function NavBar(props) {
  return (
    <div>
      <h1>CitySpire</h1>
      <div>
        <Link to="/user"></Link>
        <Link to="/favorites"></Link>
      </div>
    </div>
  );
}

export default NavBar;
