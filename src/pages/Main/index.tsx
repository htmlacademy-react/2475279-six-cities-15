import Card from '../../components/Card';
import Header from '../../components/Header';
import { cities } from './mockData';

interface IAppScreenProps {
  offers: number;
}

const MainPage = ({ offers }: IAppScreenProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map(({ id, title }) => (
              <li className="locations__item" key={id}>
                <a className="locations__item-link tabs__item" href="#">
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers} places to stay in Amsterdam
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active">
                  Popular
                </li>
                <li className="places__option">Price: low to high</li>
                <li className="places__option">Price: high to low</li>
                <li className="places__option">Top rated first</li>
              </ul>
            </form>

            <Card />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
