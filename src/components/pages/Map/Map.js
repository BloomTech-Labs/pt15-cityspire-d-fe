import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';
import LivabilityLandingPage from '../Livability/LivabilityLandingPage';
import axios from 'axios';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const mapContainerRef = useRef(null);
  const [cityName, setCityName] = useState([]);

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

  useEffect(() => {
    axios
      // .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoiY2l0eXNwaXJlZCIsImEiOiJja2tkcngzaHIwMHd3MnhsbWM0eHhibWtjIn0.FnQxPRtk2XQLf79gI3PFsw`)
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/seattle.json?access_token=pk.eyJ1IjoiY2l0eXNwaXJlZCIsImEiOiJja2tkcngzaHIwMHd3MnhsbWM0eHhibWtjIn0.FnQxPRtk2XQLf79gI3PFsw`
      )
      .then(res => {
        setCityName(res.data);
        console.log('aw: Map.js: setCityName: ', res.data.features); //.[0].geometry.coordinates)
      })
      .catch(err => {
        console.log(
          'aw: CityScr.js: axios: city_scr: ',
          err.message,
          err.response
        );
      });
  }, []);

  const cityClicked = false;

  return (
    <>
      <div id="geocoder" className="geocoder"></div>
      <div className="map-container" ref={mapContainerRef} />
      {cityClicked && <LivabilityLandingPage />}
    </>
  );
}
export default Map;
