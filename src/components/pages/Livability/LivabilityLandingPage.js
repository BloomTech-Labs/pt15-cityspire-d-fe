import axios from 'axios';
import React, { useState, useEffect } from 'react';

function LivabilityLandingPage() {
  const [livability, setLivability] = useState({});

  useEffect(() => {
    axios
      .get('https://cityspire.dananderson.dev/city_scr/Seattle')
      .then(res => {
        setLivability(res.data);
        console.log(
          'aw: LivabilityLandingPage.js: axios: city_scr: ',
          res.data
        );
      })
      .catch(err => {
        console.log(
          'aw: LivabilityLandingPage.js: axios: city_scr: ',
          err.message,
          err.response
        );
      });
  }, []);

  return (
    <div>
      <h1>livability</h1>
      <div>
        <p>{livability.msg}</p>
        <p>{livability.score}</p>
      </div>
    </div>
  );
}

export default LivabilityLandingPage;
