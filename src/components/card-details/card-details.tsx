import { Link } from 'react-router-dom';
import { IOffer } from '../../types/offers';

interface ICardDetailsProps {
  className?: string;
  offer: IOffer;
  handleHoverCard: (offer?: IOffer) => void;
}

const CardDetails = ({
  offer,
  className,
  handleHoverCard,
}: ICardDetailsProps) => {
  const { id, isPremium, images, price, title, type } = offer;

  const handleMouseOn = () => {
    handleHoverCard(offer);
  };

  const handleMouseOff = () => {
    handleHoverCard();
  };

  return (
    <Link to={`/offer/${id}`}>
      <article
        className={`${className}__card place-card`}
        key={id}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>

        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>

          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>

          <h2 className="place-card__name">{title}</h2>

          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardDetails;
