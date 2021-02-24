import React from 'react';

import LivabilityLandingPage from '../Livability/LivabilityLandingPage';

function RenderMapbox({ mapContainerRef }) {
  return (
    <div>
      <div id="geocoder" className="geocoder"></div>
      <div className="map-container" ref={mapContainerRef} />
      <LivabilityLandingPage />
    </div>
  );
}

export default RenderMapbox;
