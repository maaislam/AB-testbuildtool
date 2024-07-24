import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID } = shared;

const init = () => {
  const data = window.recentlyViewed;
  const firstFourItems = data.slice(0, 4);

  const attachPoint = document.querySelector('.product-recommendations-wrapper');
  attachPoint.insertAdjacentHTML('beforebegin', cards(ID, firstFourItems));
};

export default () => {
  setup();

  init();
};
