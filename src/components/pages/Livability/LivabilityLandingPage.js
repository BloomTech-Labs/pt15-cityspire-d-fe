import React from 'react';
import AirQualScr from './AirQualScr.js';
import CityScr from './CityScr.js';
import CrimeScr from './CrimeScr.js';
import './livabilityCSS.css';
import RentAvg from './RentAvg.js';
import WalkScr from './WalkScr.js';

function LivabilityLandingPage() {
  return (
    <div className="livabilityBox">
      <CityScr />
      <RentAvg />
      <CrimeScr />
      <WalkScr />
      <AirQualScr />
    </div>
  );
}

export default LivabilityLandingPage;
