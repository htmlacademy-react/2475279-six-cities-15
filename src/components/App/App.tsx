import Main from '../../pages/main-page/main-page';

interface IAppScreenProps {
  offer: number;
}

const App = ({ offer }: IAppScreenProps): JSX.Element => (
  <div>
    <Main offer={offer} />
  </div>
);

export default App;
