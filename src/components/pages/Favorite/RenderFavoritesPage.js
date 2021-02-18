import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RenderFavoritesPage() {
  const [favorite, setFavorite] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cityspire-d-be.herokuapp.com/userlocations`)
      .then(res => {
        setUserId(res.data);
        console.log('aw: RenderFavoritesPage.js: .get: userID', res.data);
      })
      .catch(err => {
        console.log(
          'aw: RenderFavoritesPage.js: .get: userID: ',
          err.message,
          err.response
        );
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://cityspire-d-be.herokuapp.com/userlocations/${userId}`)
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
  }, []);

  return (
    <div>
      {favorite.map(userLoc => (
        <div key={userLoc.id}>
          <h2>{userLoc.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default RenderFavoritesPage;
