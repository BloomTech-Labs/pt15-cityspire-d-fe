import React from 'react';
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
