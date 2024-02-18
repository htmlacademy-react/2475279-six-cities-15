interface ICardInfo {
  id: number;
  premium: boolean;
  imgSrc: string;
  cost: number;
  description: string;
  type: string;
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
