import { IFavorite } from '../../mocks/favorites';

interface IFavoritesPageProps {
  favorites: IFavorite[];
}

const FavoritesPage = ({ favorites }: IFavoritesPageProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favorites.map(
            ({ id, city, isPremium, images, price, title, type }) => (
              <li className="favorites__locations-items" key={id}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    {isPremium ? (
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                    ) : null}

                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src={images[0]}
                          width="150"
                          height="110"
                          alt="Place image"
                        />
                      </a>
                    </div>

                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">
                            &euro;{price}
                          </b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button"
                        >
                          <svg
                            className="place-card__bookmark-icon"
                            width="18"
                            height="19"
                          >
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{title}</a>
                      </h2>
                      <p className="place-card__type">{type}</p>
                    </div>
                  </article>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoritesPage;
