interface ICardInfo {
  id: number;
  premium: boolean;
  imgSrc: string;
  cost: number;
  description: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
}

export const cardInfo: ICardInfo[] = [
  {
    id: 1,
    premium: true,
    imgSrc: 'img/apartment-01.jpg',
    cost: 120,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    premium: false,
    imgSrc: 'img/room.jpg',
    cost: 80,
    description: 'Wood and stone place',
    type: 'Room',
  },
  {
    id: 3,
    premium: false,
    imgSrc: 'img/apartment-02.jpg',
    cost: 132,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    premium: true,
    imgSrc: 'img/apartment-03.jpg',
    cost: 180,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    premium: false,
    imgSrc: 'img/room.jpg',
    cost: 80,
    description: 'Wood and stone place',
    type: 'Room',
  },
];

interface IOfferImg {
  id: number;
  imgSrc: string;
}

export const offerImg: IOfferImg[] = [
  {
    id: 1,
    imgSrc: 'img/room.jpg',
  },
  {
    id: 2,
    imgSrc: 'img/apartment-01.jpg',
  },
  {
    id: 3,
    imgSrc: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    imgSrc: 'img/apartment-03.jpg',
  },
  {
    id: 5,
    imgSrc: 'img/studio-01.jpg',
  },
  {
    id: 6,
    imgSrc: 'img/room.jpg',
  },
];
