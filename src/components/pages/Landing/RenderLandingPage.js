import React from 'react';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './RenderLandingPage.css';

function RenderLandingPage() {
  return (
    <>
      <section className="hero-img">
        <div className="search-city-bg">
          <h1>Welcome To CitySpire</h1>
          <Link to="/map">
            <div className="search-city-btn-container">
              <span className="fa-icon-container">
                <FontAwesomeIcon className="fa-icon" icon={faSearchLocation} />
              </span>
              <button className="search-city-btn">Search for City</button>
            </div>
          </Link>
        </div>
      </section>
      <section className="hero-container">
      </section>
    </>
  );
}
export default RenderLandingPage;
