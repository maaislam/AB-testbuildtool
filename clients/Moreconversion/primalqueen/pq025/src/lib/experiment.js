import setup from './services/setup';
import shared from './shared/shared';
import reviewsContainer from './components/reviewsContainer';

const { ID } = shared;

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const offset = 0; //Adjust this value
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth'
    });
  }
};

const init = () => {
  const reviewSummary = document.querySelector('.summary-overview');
  const reviewsRatingElement = reviewSummary.querySelector('.stamped-summary-caption');
  const totalReviewsElement = reviewSummary.querySelector('.stamped-summary-text');
  const totalReviewsText = totalReviewsElement ? totalReviewsElement.textContent.trim() : '';
  const reviewRating = reviewsRatingElement ? reviewsRatingElement.textContent.trim() : '';

  console.log(totalReviewsText, reviewRating);
  const targetPoint = document.querySelectorAll('#join_pkg .join_package_box .package');
  targetPoint.forEach((item) => {
    const titleElement = item.querySelector('.pakge_heading');
    if (!item.querySelector(`.${ID}__reviewsContainer`)) {
      titleElement.insertAdjacentHTML(
        'afterend',
        reviewsContainer(ID, reviewRating, totalReviewsText)
      );
    }
  });
};

export default () => {
  setup(); //use if needed
  document.body.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest(`.${ID}__reviewsContainer`)) {
      scrollToSection('#stamped-main-widget');
    }
  });
  init();
};
