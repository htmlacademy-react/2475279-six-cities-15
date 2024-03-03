import { ChangeEvent, FormEvent, useState } from 'react';
import { RatingNames } from '../../../../const';
import InputItem from './input-item';

const OfferForm = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const handleChangeData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
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
        {Object.entries(RatingNames)
          .map(([rate, title]) => (
            <InputItem
              value={rate}
              title={title}
              key={title}
              handleChangeData={handleChangeData}
            />
          ))
          .reverse()}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        value={formData.review}
        onChange={handleChangeData}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.rating === 0 || formData.review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
