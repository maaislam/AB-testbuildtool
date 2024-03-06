import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import delivery from './components/delivery';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);

  const atcContainer = document.querySelector(
    '.product-button-block button.product-button[type="submit"]'
  );

  if (document.querySelector(`.${ID}__delivery`)) {
    document.querySelector(`.${ID}__delivery`).remove();
  }

  setTimeout(() => atcContainer.insertAdjacentHTML('beforebegin', delivery(ID)), 2000);
};
