import React from 'react';
import ReactDOM from 'react-dom';
import { RestfulProvider } from "restful-react";
import App from './components/App';
import { getApiUrl } from './apiConfig';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RestfulProvider base={getApiUrl()}>
      <App />
    </RestfulProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
