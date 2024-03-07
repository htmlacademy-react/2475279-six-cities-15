import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { favorites } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offerCount={Settings.Offer}
      offers={offers}
      reviews={reviews}
      favorites={favorites}
    />
  </React.StrictMode>
);
