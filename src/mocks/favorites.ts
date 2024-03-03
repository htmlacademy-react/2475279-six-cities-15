import { IFavorite } from '../types/favorites';

export const favorites: IFavorite[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 5,
    },
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
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 5,
    },
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
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 5,
    },
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
