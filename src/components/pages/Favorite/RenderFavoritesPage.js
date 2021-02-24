import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Favorites.css';
import { useOktaAuth } from '@okta/okta-react';

function RenderFavoritesPage() {
  const [favorite, setFavorite] = useState([]);
  const [cityScr, setCityScr] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        setUserInfo(info.sub);
      });
    }
  }, [authState, authService]);

  useEffect(() => {
    axios // get users favorite locations
      .get(`https://cityspire-d-be.herokuapp.com/userlocations/${userInfo}`)
      .then(res => {
        setFavorite(res.data);
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
    <div className="favorite">
      {favorite.map(userLoc => (
        <div key={userLoc.id}>
          <h3
            className="cities"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {userLoc.name}
          </h3>
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
