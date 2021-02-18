import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RenderFavoritesPage() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    axios
      .get(``)
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
  });
  return <div>Test</div>;
}

export default RenderFavoritesPage;
