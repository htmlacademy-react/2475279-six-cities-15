export interface IReviews {
  id: number;
  avatarUrl: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: IReviews[] = [
  {
    id: 1,
    avatarUrl: 'img/avatar-max.jpg',
    name: 'Max',
    rating: 4,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
];
