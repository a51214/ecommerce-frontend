import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function loadApp() {
  let el = document.getElementById('app');

  if (el) {
    ReactDOM.render(
      <App/>, el
    );
  }
}

window.loadApp = loadApp;

if (module.hot) {
  module.hot.accept();
}
