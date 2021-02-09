import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';
import LivabilityLandingPage from '../Livability/LivabilityLandingPage';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99, 40],
      zoom: 3.25,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: 'us',
      mapboxgl: mapboxgl,
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    return () => map.remove();
  }, []);

  const cityClicked = true;

  return (
    <>
      <div id="geocoder" className="geocoder"></div>
      <div className="map-container" ref={mapContainerRef} />
      {cityClicked && <LivabilityLandingPage />}
    </>
  );
}
export default Map;
