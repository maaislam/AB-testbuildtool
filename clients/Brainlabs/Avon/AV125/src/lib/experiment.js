import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import banner from './banner';
import addToCart from './addToCart';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorElem = document.querySelector('.Cart_Body');
  if (document.querySelector(`.${ID}__banner`)) return;
  anchorElem.insertAdjacentHTML('afterend', banner(ID));

  document.querySelector(`.${ID}__addtobag`).addEventListener('click', ({ target }) => {
    const sku = target.getAttribute('data-sku');
    addToCart(sku)
      .then((data) => {
        console.log(data);
        gaTracking('Customer clicks “Add to Bag”');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  });
};
