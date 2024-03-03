import CardsList from '../../components/cards-list/cards-list';
import OfferInfo from './components/offer-info/offer-info';
import OfferReview from './components/offer-review/offer-review';
import NotFoundPage from '../not-found-page/not-found-page';
import Map from '../../components/map/map';
import { IOffer } from '../../types/offers';
import { IReviews } from '../../types/reviews';
import { useParams } from 'react-router-dom';

interface IOfferPageProps {
  offers: IOffer[];
  reviews: IReviews[];
}

const OfferPage = ({ offers, reviews }: IOfferPageProps): JSX.Element => {
  const { idEvent } = useParams();

  const currentOffer: IOffer | undefined = offers.find(
    (offer: IOffer) => offer.id === idEvent
  );

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offers.map(({ id, images }) => (
              <div className="offer__image-wrapper" key={id}>
                <img
                  className="offer__image"
                  src={images[0]}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferInfo offers={offers} />

            <OfferReview reviews={reviews} />
          </div>
        </div>

        <Map className="offer__map" />
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <CardsList offers={offers} className="near-places" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;
