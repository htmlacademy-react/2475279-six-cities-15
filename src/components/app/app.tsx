import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../authorizationStatus';
import { IOffer } from '../../types/offers';
import { IReviews } from '../../types/reviews';
import { IFavorite } from '../../types/favorites';

interface IAppProps {
  offerCount: number;
  offers: IOffer[];
  reviews: IReviews[];
  favorites: IFavorite[];
}

export const App = ({
  offerCount,
  offers,
  reviews,
  favorites,
}: IAppProps): JSX.Element => {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route
            index
            element={<MainPage offerCount={offerCount} offers={offers} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} reviews={reviews} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage favorites={favorites} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
