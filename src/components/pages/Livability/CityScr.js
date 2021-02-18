import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './livabilityCSS.css';
import { LocationContext } from '../context/Locationcontext.js';
import { FaHeart } from 'react-icons/fa';

function CityScr() {
  const [cityScr, setCityScr] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const location = useContext(LocationContext);
  console.log('aw: CityScr.js: locationContext: ', location);

  useEffect(() => {
    axios
      .get(
        `https://cityspire-d-be.herokuapp.com/locations
      `
      )
      .then(res => {
        setCityScr(res.data);
        console.log('aw: CityScr.js: .get: setCityScr: ', res.data);
      })
      .catch(err => {
        console.log(
          'aw: CityScr.js: .get: city_scr: ',
          err.message,
          err.response
        );
        setCityScr(null);
      });
  }, []);

  const favorite = e => {
    e.preventDefault();
    console.log('aw: CityScr.js: .put: Test', location);
    // axios
    //   .post(``)
    //   .then(res => {
    //     setFavorites(res.data)
    //     console.log('aw: CityScr.js: .put: favorite: ', res.data)
    //   })
    //   .catch(err => {
    //     console.log(
    //       'aw: CityScr.js: .put: favorite: ',
    //       err.message,
    //       err.response
    //     );
    //   })
  };

  return (
    <div>
      {cityScr === null ? (
        <div></div>
      ) : (
        <div className="livabilityBox">
          <div className="mainScore">
            <h1>{location}</h1>
            <button className="button" onClick={favorite}>
              <FaHeart size="30px" color="red" />
            </button>
          </div>
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
      )}
    </div>
  );
}

export default CityScr;
