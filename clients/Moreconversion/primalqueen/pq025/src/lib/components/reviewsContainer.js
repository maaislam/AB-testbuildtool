import { startElement } from '../assets/icons';

const reviewsContainer = (id, reviewRating, totalReviewsText) => {
  const html = `
        <span class="${id}__reviewsContainer">
            <span class="${id}__rating">${reviewRating}</span>
            <span class="${id}__icon">${startElement}</span>
            <span class="${id}__text">${totalReviewsText}</span>
        </span>
    `;
  return html.trim();
};

export default reviewsContainer;
