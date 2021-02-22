import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Favorites.css';

function RenderFavoritesPage() {
  const [favorite, setFavorite] = useState([]);
  const [userId, setUserId] = useState([]);
  const [cityScr, setCityScr] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // console.log('aw: find user: ');

  useEffect(() => {
    axios // get users favorite locations
      // .get(`https://cityspire-d-be.herokuapp.com/userlocations/${userId}`)
      // llama002
      // .get(`https://cityspire-d-be.herokuapp.com/userlocations/00ultwew80Onb2vOT4x6`)
      // llama001
      .get(
        `https://cityspire-d-be.herokuapp.com/userlocations/00ulthapbErVUwVJy4x6`
      )
      .then(res => {
        setFavorite(res.data);
        console.log(
          'aw: RenderFavoritesPage.js: .get: UserLocations',
          res.data
        );
      })
      .catch(err => {
        console.log(
          'aw: RenderFavoritesPage.js: .get: UserLocations: ',
          err.message,
          err.response
        );
      });
    axios // get location data
      .get(`https://cityspire-d-be.herokuapp.com/locations`)
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

  return (
    <div className="favorites">
      <p>hover see city data</p>
      <p>click go back to map</p>
      {favorite.map(userLoc => (
        <div key={userLoc.id}>
          <button
            className="cities"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {userLoc.name}
          </button>
          {isShown && (
            <div className="data">
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
          )}
        </div>
      ))}
    </div>
  );
}

export default RenderFavoritesPage;
