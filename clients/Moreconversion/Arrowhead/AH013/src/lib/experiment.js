import setup from './services/setup';
import shared from './shared/shared';
import reviewHtml from './components/reviewHtml';
import data from './data/data';

const { ID, VARIATION } = shared;

const extractProductIdentifier = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 1];
};

const init = () => {
  const currentUrl = window.location.href;
  const productIdentifier = extractProductIdentifier(currentUrl);

  const review = data.find((r) => productIdentifier.includes(r.urlStr));

  if (review) {
    if (!document.querySelector('.review_wrapper')) {
      VARIATION === '1' &&
        document
          .querySelector('.product-single__meta')
          .insertAdjacentHTML('afterbegin', reviewHtml(review));

      VARIATION === '2' &&
        document
          .querySelector('.product-description')
          .insertAdjacentHTML('beforebegin', reviewHtml(review));
    }
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'Control') return;

  init(); //use
};
