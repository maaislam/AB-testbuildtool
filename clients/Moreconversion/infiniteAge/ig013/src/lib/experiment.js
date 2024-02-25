import setup from './services/setup';
import shared from './shared/shared';
import cartIcon from './assets/cartIcon';

const { ID } = shared;

const init = () => {
  const atcBtns = document.querySelectorAll('.pkg-container .pkgrgt div > a.onetime');

  const htmlStr = `<button class='${ID}__atcBtn pkgbtn'>
    <div class='${ID}__btnContent'>
      <span>Add to Cart</span>
      <span>${cartIcon()}</span>
    </div>
    <span class='${ID}__guaranteeText'>100% Money Back Guarantee</span>
  </button>`;

  atcBtns.forEach((btn) => {
    btn.insertAdjacentHTML('afterbegin', htmlStr);
  });
};

export default () => {
  setup();

  init();
};
