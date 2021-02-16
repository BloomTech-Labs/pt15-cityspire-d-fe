import React from 'react';
import ReactDOM from 'react-dom';

import LoginContainer from '../components/pages/Login/LoginContainer';

describe('<LoginContainer /> test suite', () => {
  test('signin widget mounts successfully', () => {
    const container = document.createElement('div');
    ReactDOM.render(<LoginContainer />, container);
    expect(container.querySelector('#sign-in-widget')).toBeTruthy();
  });
});
