import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Settings } from './const';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={Settings.Offer} offers={offers} />
  </React.StrictMode>
);
