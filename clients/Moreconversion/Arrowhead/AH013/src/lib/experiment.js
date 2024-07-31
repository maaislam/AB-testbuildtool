import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
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
  console.log(ID);

  if (VARIATION === 'Control') return;

  init(); //use
};
