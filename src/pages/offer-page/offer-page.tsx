import Card from '../../components/card/card';
import Header from '../../components/header/header';
import { offerImg } from '../../mocks/mocks';
import OfferInfo from './components/offer-info/offer-info';
import OfferReview from './components/offer-review/offer-review';

const OfferPage = (): JSX.Element => (
  <div className="page">
    <Header />

    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offerImg.map(({ id, imgSrc }) => (
              <div className="offer__image-wrapper" key={id}>
                <img className="offer__image" src={imgSrc} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>

        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferInfo />

            <OfferReview />
          </div>
        </div>

        <section className="offer__map map"></section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <Card />
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default OfferPage;
