import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Mapbox.css';
import LivabilityLandingPage from '../Livability/LivabilityLandingPage';
import { LocationContext } from '../context/Locationcontext';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapBox() {
  const mapContainerRef = useRef(null);
  const [location, setLocation] = useState('');
  console.log('location', location);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99, 40],
      zoom: 3.3,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: 'us',
      mapboxgl: mapboxgl,
    });

    geocoder.on('result', function(result) {
      console.log(result);
      setLocation(result.result.text);
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    map.resize();

    return () => map.remove();
  }, []);

  return (
    <>
      <LocationContext.Provider value={location}>
        <div id="geocoder" className="geocoder"></div>
        <div className="map-container" ref={mapContainerRef} />
        <LivabilityLandingPage />
      </LocationContext.Provider>
    </>
  );
}
export default MapBox;
