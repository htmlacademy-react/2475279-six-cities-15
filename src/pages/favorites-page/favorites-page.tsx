import { IFavorite } from '../../types/favorites';
import FavoriteCard from './components/favorite-card';

interface IFavoritesPageProps {
  favorites: IFavorite[];
}

const FavoritesPage = ({ favorites }: IFavoritesPageProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favorites.map((favorite) => (
            <FavoriteCard favorite={favorite} key={favorite.id} />
          ))}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoritesPage;
