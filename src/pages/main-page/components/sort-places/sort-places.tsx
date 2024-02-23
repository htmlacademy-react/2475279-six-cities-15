import { OPTIONS } from '../../../../const';

interface IAppScreenProps {
  offer: number;
}

const SortPlaces = ({ offer }: IAppScreenProps): JSX.Element => (
  <div>
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offer} places to stay in Amsterdam</b>

    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className="places__options places__options--custom places__options--opened">
        {OPTIONS.map((type) => (
          <li className="places__option" key={type}>
            {type}
          </li>
        ))}
      </ul>
    </form>
  </div>
);

export default SortPlaces;
