import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './livabilityCSS.css';

function CityScr() {
  const [cityScr, setCityScr] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cityspire-d-be.herokuapp.com/locations`)
      .then(res => {
        setCityScr(res.data);
        console.log('aw: CityScr.js: axios: city_scr: ', res.data);
      })
      .catch(err => {
        console.log(
          'aw: CityScr.js: axios: city_scr: ',
          err.message,
          err.response
        );
      });
  }, []);

  return (
    <div className="mainScore">
      <h1>City Name</h1>
      <div className="subScores">
        {cityScr.map(cityScrs => (
          <div key={cityScrs.id}>
            <div>
              <h4>Crime</h4>
              <p>{cityScrs.crime_data}</p>
            </div>
            <div>
              <h4>Population</h4>
              <p>{cityScrs.population}</p>
            </div>
            <div>
              <h4>Cost of Living</h4>
              <p>{cityScrs.cost_of_living}</p>
            </div>
            <div>
              <h4>Rental Rates</h4>
              <p>{cityScrs.rental_rates}</p>
            </div>
            <div>
              <h4>Walk Rate</h4>
              <p>{cityScrs.walk_score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityScr;
