import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Favorites.css';

function RenderFavoritesPage() {
  const [favorite, setFavorite] = useState([]);
  const [userId, setUserId] = useState([]);
  const [cityScr, setCityScr] = useState([]);

  console.log('aw: find user: ');

  // useEffect(() => {
  //     axios
  //     .get(`https://cityspire-d-be.herokuapp.com/userlocations`)
  //     .then(res => {
  //         setUserId(res.data);
  //         console.log('aw: RenderFavoritesPage.js: .get: userID', res.data);
  //     })
  //     .catch(err => {
  //         console.log(
  //         'aw: RenderFavoritesPage.js: .get: userID: ',
  //         err.message,
  //         err.response
  //         );
  //     });
  // }, []);

  useEffect(() => {
    axios
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
    axios
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
          <h2 className="cities">{userLoc.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default RenderFavoritesPage;
