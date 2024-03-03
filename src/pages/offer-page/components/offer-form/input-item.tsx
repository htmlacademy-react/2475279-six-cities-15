import { ReactEventHandler } from 'react';

interface InputItemProps {
  value: string;
  title: string;
  handleChangeData: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const InputItem = ({ value, title, handleChangeData }: InputItemProps) => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={value}
      id={`${value}-stars`}
      type="radio"
      onChange={handleChangeData}
    />
    <label
      htmlFor={`${value}-stars`}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default InputItem;
