import Main from '../../pages/main-page/main-page';

interface IAppScreenProps {
  offer: number;
}

export const App = ({ offer }: IAppScreenProps): JSX.Element => (
  <div>
    <Main offer={offer} />
  </div>
);
