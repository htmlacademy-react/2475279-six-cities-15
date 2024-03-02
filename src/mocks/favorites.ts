interface IHost {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  comment: string;
  rating: number;
}

export interface IFavorite {
  id: number;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  price: number;
  city:
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';
  location: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: IHost;
  images: string[];
  maxAdults: number;
}

export const favorites: IFavorite[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: 'Paris',
    location: 'location',
    isFavorite: true,
    isPremium: true,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 2,
    goods: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      comment:
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      rating: 4,
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 3,
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: 'Cologne',
    location: 'location',
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 2,
    goods: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Oliver',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      comment:
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      rating: 4,
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 3,
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: 'Amsterdam',
    location: 'location',
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 2,
    goods: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Oliver',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      comment:
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      rating: 4,
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 3,
  },
];
