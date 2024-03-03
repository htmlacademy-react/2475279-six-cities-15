import { ChangeEvent, FormEvent, useState } from 'react';
import { STARS } from './data';

const OfferForm = () => {
  const [item, setItem] = useState({
    review: '',
  });

  const [star, setStar] = useState('');

  const handleChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleChangeStar = (e: ChangeEvent<HTMLInputElement>) => {
    setStar(e.target.value);

    return star; //deleted eslint's error
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {STARS.map(({ name, value, id }) => (
          <div key={id}>
            <input
              className="form__rating-input visually-hidden"
              name={name}
              value={value}
              id={id}
              type="radio"
              onChange={handleChangeStar}
            />
            <label
              htmlFor={id}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        value={item.review}
        onChange={handleChangeReview}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
