import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import banner from './banner';
import addToCart from './helpers/addToCart';
import obsIntersection from './helpers/observeIntersection';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  const cartFooter = document.querySelector('.Cart-Footer');

  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      gaTracking('Conditions Met');
    }
  };

  obsIntersection(cartFooter, 0.1, intersectionCallback);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorElem =
    window.DY.deviceInfo.type !== 'desktop'
      ? document.querySelector('.Cart-Products')
      : document.querySelector('.Cart_Body');
  if (document.querySelector(`.${ID}__banner`)) return;
  anchorElem.insertAdjacentHTML('afterend', banner(ID, VARIATION));

  document.querySelector(`.${ID}__addtobag`).addEventListener('click', ({ target }) => {
    const sku = target.getAttribute('data-sku');
    addToCart(sku)
      .then(() => {
        gaTracking('Customer clicks “Add to Bag”');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  });
};
