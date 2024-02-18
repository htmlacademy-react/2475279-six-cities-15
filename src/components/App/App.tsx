import Main from '../../pages/Main';

interface IAppScreenProps {
  offers: number;
}

const App = ({ offers }: IAppScreenProps): JSX.Element => (
  <div>
    <Main offers={offers} />
  </div>
);

export default App;
