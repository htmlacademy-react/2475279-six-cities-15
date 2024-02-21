import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from './const';
import MainPage from './pages/main-page/main-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import OfferPage from './pages/offer-page/offer-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import PrivateRoute from './components/private-route/private-route';

interface IAppScreenProps {
  offer: number;
}

export const App = ({ offer }: IAppScreenProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={<MainPage offer={offer} />} />
        <Route path={AppRoute.OfferPage} element={<OfferPage />} />
        <Route path={AppRoute.FavoritesPage} element={<FavoritesPage />} />
        <Route path={AppRoute.LoginPage} element={<LoginPage />} />
        <Route
          path={AppRoute.FavoritesPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
