import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID } = shared;

const init = () => {
  const data = window.recentlyViewed;
  const firstFourItems = data.slice(0, 4);

  const removeDuplicates = (array) => {
    const uniqueIds = new Set();
    return array?.filter((item) => !uniqueIds.has(item?.id) && uniqueIds.add(item?.id));
  };

  const uniqueItems = removeDuplicates(firstFourItems);

  if (!uniqueItems.length > 0) return;

  const attachPoint = document.querySelector('.product-recommendations-wrapper');
  attachPoint.insertAdjacentHTML('beforebegin', cards(ID, uniqueItems));
};

export default () => {
  setup();

  init();
};
