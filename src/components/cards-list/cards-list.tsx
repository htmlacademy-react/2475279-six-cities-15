import { useState } from 'react';
import { IOffer } from '../../types/offers';
import CardDetails from '../card-details/card-details';
import { Nullable } from 'vitest';

interface ICardProps {
  className?: string;
  offers: IOffer[];
}

const CardsList = ({ className, offers }: ICardProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<Nullable<IOffer>>(null);

  const handleHoverCard = (offer?: IOffer) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardDetails
          offer={offer}
          key={offer.id}
          className={className}
          handleHoverCard={handleHoverCard}
        />
      ))}
    </div>
  );
};

export default CardsList;
