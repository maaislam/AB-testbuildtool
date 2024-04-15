import setup from './services/setup';

import shared from './shared/shared';
import { observeDOM, initExternalLib, initSwiper, pollerLite } from './helpers/utils';
import { cartUpsell } from './components/cartUpsell';
import { cartUpsellMobile } from './components/cartUpsellMobile';

const { ID } = shared;
const swiperJs = 'https://m7cdn.io/common/js/swiper.js';
const swiperCss = 'https://dev.m7cdn.io//common/css/swiper.css';

const getCartInfo = async () => {
  return fetch('https://hashstash.co/cart.js').then((res) => res.json());
};

const getProdInfo = async (URL) => {
  return fetch(URL).then((res) => res.json());
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    //eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const addHtmlAndSwiper = (arr) => {
  //desktop elem remove
  document.querySelector(`.${ID}__cartUpsell`) &&
    document.querySelector(`.${ID}__cartUpsell`).remove();

  //mobile elem remove
  document.querySelector(`.${ID}__cartUpsellMobile`) &&
    document.querySelector(`.${ID}__cartUpsellMobile`).remove();

  //desktop elem add
  if (!document.querySelector(`.${ID}__cartUpsell`)) {
    document
      .querySelector('#cart-drawer-recommendations')
      .insertAdjacentHTML('beforebegin', cartUpsell(ID, arr));
  }

  //mobile elem add
  if (!document.querySelector(`.${ID}__cartUpsellMobile`)) {
    document
      .querySelector('#cart-drawer-recommendations')
      .insertAdjacentHTML('beforebegin', cartUpsellMobile(ID, arr));
  }

  arr.length >= 2 &&
    pollerLite([() => typeof window.Swiper === 'function'], () => {
      setTimeout(initSwiper(`.${ID}__cartUpsell`), 0);
    });
};

const init = async () => {
  if (!document.querySelector('body #cart-drawer #cart-drawer-recommendations')) {
    return;
  }

  try {
    const cartInfos = await getCartInfo();
    if (!cartInfos.item_count) return;
    const arr = [];
    const stashProdInfo = await getProdInfo('https://hashstash.co/products/hashstash.json');
    const grinderProdInfo = await getProdInfo(
      'https://hashstash.co/products/hashstash-2-5-aluminum-grinder.json'
    );

    const product = {
      ...stashProdInfo.product
    };
    const cartItems = {
      ...cartInfos
    };

    const noOgProdAvaiable = product.variants.filter(
      (variant) => !cartItems.items.some((item) => item.id === variant.id)
    );

    if (!noOgProdAvaiable.length) {
      document.querySelector(`.${ID}__cartUpsell`) &&
        document.querySelector(`.${ID}__cartUpsell`).remove();

      document.querySelector(`.${ID}__cartUpsellMobile`) &&
        document.querySelector(`.${ID}__cartUpsellMobile`).remove();
      return;
    }

    const grinder = {
      id: grinderProdInfo.product.variants[0].id,
      prodId: grinderProdInfo.product.variants[0].product_id,
      img: grinderProdInfo.product.image.src,
      title: grinderProdInfo.product.title,
      color: grinderProdInfo.product.variants[0].title,
      price: grinderProdInfo.product.variants[0].price,
      comparePrice: grinderProdInfo.product.variants[0].compare_at_price,
      url: `/products/hashstash-2-5-aluminum-grinder?variant=${grinderProdInfo.product.variants[0].id}`
    };

    const modifiedArray = [...shuffleArray(noOgProdAvaiable)];
    //console.log('🚀 ~ file: experiment.js:103 ~ init ~ modifiedArray:', modifiedArray);
    //const selectedElements = modifiedArray.slice(0, 2);
    const selectedElements = modifiedArray;

    selectedElements.forEach((element) => {
      const { id, product_id, image_id, compare_at_price, price, title } = element;
      const img = product.images.find((image) => image.id === image_id)?.src;
      arr.push({
        id,
        prodId: product_id,
        img,
        title: product.title,
        color: title,
        price,
        comparePrice: compare_at_price,
        url: `/products/hashstash?variant=${id}`
      });
    });

    //check if grinder present in cart
    const isGrinderPresent = cartItems.items.some((item) => item.product_id === grinder.prodId);
    //console.log('🚀 ~ file: experiment.js:75 ~ init ~ cartItems:', cartItems);
    //console.log('🚀 ~ file: experiment.js:124 ~ init ~ isGrinderPresent:', isGrinderPresent);

    if (isGrinderPresent) {
      addHtmlAndSwiper(arr);
      return;
    }
    arr.splice(1, 0, grinder);
    addHtmlAndSwiper(arr);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default () => {
  setup(); //use if needed

  initExternalLib(swiperJs, swiperCss);
  init();
  observeDOM('body .header__cart-count', () => {
    setTimeout(init, 1000);
  });
};
