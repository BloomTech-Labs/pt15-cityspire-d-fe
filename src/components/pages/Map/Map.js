import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import './Map.css';

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

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    // navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    //   enableHighAccuracy: true,
    // });

    return () => map.remove();
  }, []);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
}
export default Map;
