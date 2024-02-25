import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import cartIcon from './assets/cartIcon';

const { ID, VARIATION } = shared;

const init = () => {
  const atcBtns = document.querySelectorAll('.pkg-container .pkgrgt div > a.onetime');

  const htmlStr = `<button class='${ID}__atcBtn pkgbtn'>
    <span>Add to Cart</span>
    <span>${cartIcon()}</span>
  </button>`;

  atcBtns.forEach((btn) => {
    btn.insertAdjacentHTML('afterbegin', htmlStr);
  });
};

export default () => {
  setup();

  init();
};
