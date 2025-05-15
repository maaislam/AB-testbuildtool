import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import productsWrapper from './components/productsWrapper';
import freeShippingBar from './components/freeShippingBar';

const { ID } = shared;

const getProductList = (listItems) => {
  //const listItems = [...document.querySelectorAll('#system_product-menu li')].slice(1);

  return listItems.map((li) => {
    const { id } = li;
    const div = li.querySelector('div');
    const text = div?.childNodes[0]?.textContent.trim() || '';
    const bgImage = div?.querySelector('span')?.style.backgroundImage || '';
    const image = bgImage.startsWith('url(') ? bgImage.slice(5, -2) : '';

    return {
      id,
      text,
      image
    };
  });
};

const init = () => {
  const targetPoint = document.querySelector('.accessories-banner');
  const accessoriesBtn = targetPoint.querySelector('#system_product-button');
  const freeShippingBarElem = targetPoint.querySelector('.accessories-free-shipping-banner');
  if (accessoriesBtn) {
    accessoriesBtn.click();
  }
  const listItems = [...document.querySelectorAll('#system_product-menu li')].slice(1);
  pollerLite([() => listItems.length > 0], () => {
    const products = getProductList(listItems);
    console.log(products, 'products');
    if (products.length > 0 && !document.querySelector(`.${ID}__productsWrapper`)) {
      targetPoint.insertAdjacentHTML('beforebegin', productsWrapper(ID, products));
    }
    accessoriesBtn.click();

    if (freeShippingBarElem && !document.querySelector(`.${ID}__banner`)) {
      targetPoint.insertAdjacentHTML('beforebegin', freeShippingBar(ID));
    }

    document.querySelector(`.${ID}__banner`)?.click();
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log(target, 'target');
    if (target.closest(`.${ID}__item:not(.view-all)`)) {
      const clickedItem = target.closest(`.${ID}__item`);
      const { id } = clickedItem.dataset;
      const controlItem = document.querySelector(`li#${id}`);
      if (controlItem) controlItem.click();
    } else if (target.closest(`.${ID}__item.view-all`)) {
      const clickedItem = target.closest(`.${ID}__item`);
      const { id } = clickedItem.dataset;
      const controlItem = document.querySelector(`li#${id}`);
      if (controlItem) controlItem.click();
    }
  });

  init();
};
