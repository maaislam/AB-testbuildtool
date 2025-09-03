import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const priceOptions = Array.from(document.querySelectorAll('.prices-tier.items .item')).map(
    (item) => {
      return {
        count: item.dataset.item,
        price: item.querySelector('span.price-wrapper').dataset.priceAmount
      };
    }
  );

  const targetPoint = document.querySelectorAll(
    '#product_addtocart_form label.custom-child-upsel-checkbox'
  );

  targetPoint.forEach((label) => {
    const inputElem = label.querySelector('input[type="radio"]');
    const { value } = inputElem;
    const isExistOption = priceOptions.find((option) => option.count === value);
    if (isExistOption && !label.querySelector('.per-pack-price')) {
      inputElem.insertAdjacentHTML(
        'afterend',
        `<span class="per-pack-price">€&nbsp;${isExistOption.price}</span>`
      );
    }
  });

  console.log(priceOptions, 'priceOptions');
};

export default () => {
  setup(); //use if needed

  init();
};
