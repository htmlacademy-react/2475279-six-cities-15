import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import NavTabs from './components/nav-tabs/nav-tabs';
import SortPlaces from './components/sort-places/sort-places';
import { IOffer } from '../../types/offers';

interface IMainPageProps {
  offerCount: number;
  offers: IOffer[];
}

const MainPage = ({ offerCount, offers }: IMainPageProps): JSX.Element => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <NavTabs />

    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <SortPlaces offerCount={offerCount} />
          <CardsList className="cities" offers={offers} />
        </section>

        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  </main>
);

export default MainPage;
