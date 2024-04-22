import setup from './services/setup';
import shared from './shared/shared';
import { retrieveDataFromStorage } from './helpers/utils';
import { variants } from './components/variants';
import { addToCard } from './components/addToCard';

const { ID, VARIATION } = shared;

const init = () => {
  const collectUrls = [];
  document.querySelectorAll('.product-grid .card__inner .card__content a').forEach((item) => {
    const url = item.getAttribute('href');
    collectUrls.push(url);
  });

  const productsData = retrieveDataFromStorage(collectUrls);

  document.querySelectorAll('.product-grid .card-wrapper').forEach((item) => {
    const prodUrl = item.querySelector('.card__inner .card__content a').getAttribute('href');
    if (productsData[prodUrl] && productsData[prodUrl].variants.length > 0) {
      const targetPoint = item.querySelector('.card > .card__content');
      const isAvailable = productsData[prodUrl].variants.find(
        (element) => element.available === true
      );

      if (item.querySelector(`.${ID}__variants-list`)) {
        item.querySelector(`.${ID}__variants-list`).remove();
      }
      targetPoint.insertAdjacentHTML(
        'afterend',
        variants(ID, productsData[prodUrl].variants, isAvailable || null)
      );
      if (item.querySelector(`.${ID}__atcForm`)) {
        item.querySelector(`.${ID}__atcForm`).remove();
      }
      item
        .querySelector(`.${ID}__variants-list`)
        .insertAdjacentHTML('afterend', addToCard(ID, isAvailable || null));
    }
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (VARIATION === 'control') {
    return;
  }
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest(`.${ID}__variant:not(.${ID}__stockout)`) &&
      target.closest('.product-grid .card')
    ) {
      const prodId = target.closest(`.${ID}__variant:not(.${ID}__stockout)`).dataset.prodid;
      target
        .closest(`.${ID}__variants-list`)
        .querySelectorAll('li')
        .forEach((item) => {
          if (item.classList.contains(`${ID}__selected`)) {
            item.classList.remove(`${ID}__selected`);
          }
        });

      document.querySelector(`[data-prodid="${prodId}"]`).classList.add(`${ID}__selected`);
      target
        .closest('.card')
        .querySelector(`.${ID}__atcForm .product-variant-id`).value = `${prodId}`;
    } else if (
      target.closest('.product-grid .card > .card__inner') ||
      target.closest('.product-grid .card > .card__content')
    ) {
      const parent = target.closest('.product-grid .card');
      parent.querySelector('.card__inner .card__content a').click();
    }
  });
};
