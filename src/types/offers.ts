interface ILocationCoordinates {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface ICity {
  name:
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';
  location: ILocationCoordinates;
}

interface IHost {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  comment: string;
  rating: number;
}

export interface IOffer {
  id: number | string;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  price: number;
  city: ICity;
  location: ILocationCoordinates;
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
