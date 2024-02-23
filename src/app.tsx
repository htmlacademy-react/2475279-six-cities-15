import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import OfferPage from './pages/offer-page/offer-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import PrivateRoute from './components/private-route/private-route';
import Layout from './components/layout/layout';
import { AppRoute } from './const';
import { getAuthorizationStatus } from './authorizationStatus';

interface IAppScreenProps {
  offer: number;
}

export const App = ({ offer }: IAppScreenProps): JSX.Element => {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage offer={offer} />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
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
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
