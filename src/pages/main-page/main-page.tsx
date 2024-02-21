import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import NavTabs from './components/nav-tabs/nav-tabs';
import SortPlaces from './components/sort-places/sort-places';

interface IAppScreenProps {
  offer: number;
}

const MainPage = ({ offer }: IAppScreenProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs />

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <SortPlaces offer={offer} />
            <Card />
          </section>

          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
