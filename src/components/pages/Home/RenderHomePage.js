import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import NavBar from '../Nav/navBar.js';
import '../Nav/navCSS.css';

import Map from '../Map/Map';

function RenderHomePage() {
  return (
    <>
      <NavBar />
      <Map />
    </>
  );
}
export default RenderHomePage;
