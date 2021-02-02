import React from 'react';

import { getExampleData } from '../../../api';

import { List } from '../../common';
import RenderExampleListPage from './RenderExampleListPage';
import NavBar from '../Nav/navBar.js';
import '../Nav/navCSS.css';

// Here is an example of using our reusable List component to display some list data to the UI.
const ExampleList = () => {
  return (
    <div>
      <NavBar />
      <p class="container"></p>
      <List
        // Here we are passing our Axios request helper function as a callback.
        getItemsData={getExampleData}
        // Here we are passing in a component we want to show whilst waiting for our API request
        // to complete.
        LoadingComponent={() => <div>Loading Items...</div>}
        // Here we are passing in a component that receives our new data and returns our JSX elements.
        RenderItems={RenderExampleListPage}
      />
    </div>
  );
};

export default ExampleList;
