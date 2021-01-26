import React from 'react';

import Map from '../Map/Map';

function RenderHomePage() {
  return (
    <>
      <div style={{ textAlign: 'center', margin: 0 }}>
        <form onSubmit={null}>
          <input
            className="search"
            id="search"
            type="text"
            placeholder="Search City"
          />
        </form>
        <Map />
      </div>
    </>
  );
}
export default RenderHomePage;
