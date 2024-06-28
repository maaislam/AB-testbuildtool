import setup from './services/setup';
import shared from './shared/shared';
import getProductsData from './helpers/getProductsData';
import { variants } from './components/variants';
import atcBtn from './components/atcBtn';
import addToCart from './helpers/addToCart';

const { ID, VARIATION } = shared;
const init = async () => {
  const collectUrls = [];
  const parentWrapper = document.querySelector('#CollectionAjaxContent > .grid');
  const productsItems = parentWrapper.querySelectorAll('.grid__item');
  productsItems.forEach((item) => {
    const url = item.querySelector('.grid-product__link').href.split('/products/')[1];
    collectUrls.push(url);
  });

  const data = await getProductsData(collectUrls);

  productsItems.forEach((item, index) => {
    const targetElement = item.querySelector('.grid-product__content');

    if (!item.querySelector(`.${ID}__variant-wrapper`)) {
      targetElement.insertAdjacentHTML(
        'afterend',
        variants(ID, data[index].id, data[index].variants)
      );
    }

    if (!item.querySelector(`.${ID}__atcBtn`)) {
      item.querySelector(`.${ID}__variant-wrapper`).insertAdjacentHTML('afterend', atcBtn(ID));
    }
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__size`)) {
      const targetedElement = target.closest(`.${ID}__size`);
      const targetParent = targetedElement.parentNode;
      const wrapper = targetParent.closest('fieldset');
      const activeElement = wrapper.querySelectorAll(`.${ID}__variant-input.active`);
      activeElement.forEach((active) => {
        active.classList.remove('active');
      });
      targetParent.classList.add('active');

      const atcButton = targetedElement.closest('.grid__item').querySelector(`.${ID}__atcBtn`);
      if (targetedElement.classList.contains('disabled')) {
        atcButton.classList.add('disabled');
        atcButton.querySelector('span').textContent = 'Sold Out';
      } else {
        atcButton.classList.remove('disabled');
        atcButton.querySelector('span').textContent = 'Add to cart';
      }
    } else if (target.closest(`.${ID}__atcBtn`)) {
      const targetedEl = target.closest(`.${ID}__atcBtn`);
      const wrapper = targetedEl.closest('.grid__item');
      const variantId = parseFloat(
        wrapper.querySelector(`.${ID}__variant-input.active`).getAttribute('data-variant-id')
      );

      addToCart(variantId);
    }
  });

  init(); //use if needed
};
