import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import { cartUpsell } from './components/cartUpsell';

const { ID, VARIATION } = shared;

const getCartInfo = async () => {
  return fetch('https://hashstash.co/cart.js').then((res) => res.json());
};

const getProdInfo = async (URL) => {
  return fetch(URL).then((res) => res.json());
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const init = async () => {
  console.log('start');
  if (!document.querySelector('body #cart-drawer #cart-drawer-recommendations')) {
    return;
  }
  console.log('end');

  try {
    const cartInfos = await getCartInfo();
    if (!cartInfos.item_count) return;

    const stashProdInfo = await getProdInfo('https://hashstash.co/products/hashstash.json');
    const grinderProdInfo = await getProdInfo('https://hashstash.co/products/hashstash-2-5-aluminum-grinder.json');

    const product = { ...stashProdInfo.product };
    const cartItems = { ...cartInfos };

    console.log(cartItems, grinderProdInfo);
    console.log(product);
    const noOgProdAvaiable = product.variants.filter((variant) => !cartItems.items.some((item) => item.id === variant.id));

    console.log('noOgProdAvaiable', noOgProdAvaiable);

    if (!noOgProdAvaiable.length) {
      console.log('different case: do not need to show');
      document.querySelector(`.${ID}__cartUpsell`) && document.querySelector(`.${ID}__cartUpsell`).remove();
      return;
    }

    const arr = [];
    const modifiedArray = [...shuffleArray(noOgProdAvaiable)];
    const selectedElements = modifiedArray.slice(0, 2);
    console.log('random two collect', selectedElements);
    if (selectedElements.length > 1) {
      console.log('will be add in middle');
      selectedElements.forEach((element) => {
        const { id, product_id, image_id, title, compare_at_price, price } = element;
        const img = product.images.find((image) => image.id === image_id)?.src;
        arr.push({
          id,
          prodId: product_id,
          img,
          title,
          price,
          comparePrice: compare_at_price
        });
      });

      console.log('ohh', arr);
      document.querySelector(`.${ID}__cartUpsell`) && document.querySelector(`.${ID}__cartUpsell`).remove();
      if (!document.querySelector(`.${ID}__cartUpsell`)) {
        document.querySelector('#cart-drawer-recommendations > .horizontal-product-list').insertAdjacentHTML('beforebegin', cartUpsell(ID, arr));
      }
    } else {
      console.log('will be add in last for grinder');
    }

    // progree header add
  } catch (error) {
    console.error('Error:', error);
  }
};

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
  init();
  observeDOM('body .header__cart-count', init);
};
