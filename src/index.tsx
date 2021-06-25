import React from 'react';
import ReactDOM from 'react-dom';
import { RestfulProvider } from "restful-react";
import './index.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <RestfulProvider base="/">
      <App />
    </RestfulProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
