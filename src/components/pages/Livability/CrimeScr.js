import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './livabilityCSS.css';

function CrimeScr() {
  const [city_scr, setcity_scr] = useState({});

  useEffect(() => {
    axios
      .get('https://cityspire.dananderson.dev/crime_scr/St_Louis')
      .then(res => {
        setcity_scr(res.data);
        console.log('aw: CrimeScr.js: axios: city_scr: ', res.data);
      })
      .catch(err => {
        console.log(
          'aw: CrimeScr.js: axios: city_scr: ',
          err.message,
          err.response
        );
      });
  }, []);

  return (
    <div className="mainScore">
      <div className="subScores">
        <h4>{city_scr.msg}</h4>
        <p>{city_scr.score}</p>
      </div>
    </div>
  );
}

export default CrimeScr;