import React from 'react';
import ReactDOM from 'react-dom';
import App from './v2/Provider/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

serviceWorker.unregister();
