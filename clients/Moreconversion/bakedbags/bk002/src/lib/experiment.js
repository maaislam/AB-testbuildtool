import setup from './services/setup';
import shared from './shared/shared';
import { variationOneInfo, variationTwoInfo } from './data/info';
import { sellingPoints } from './components/sellingPoints';

const { ID, VARIATION } = shared;

const init = (data) => {
  const targetPoint = document.querySelector(
    '.productpage-section .shopify-product-form .productpage-right-title'
  );
  if (document.querySelector(`.${ID}__sellingPoints`)) {
    document.querySelector(`.${ID}__sellingPoints`).remove();
  }

  if (document.querySelector('.productpage-right-size-tabs label.active')) {
    const labelElem = document.querySelector('.productpage-right-size-tabs label.active');
    const { value } = labelElem.dataset;
    if (value.includes('D8')) {
      targetPoint && targetPoint.insertAdjacentHTML('afterend', sellingPoints(ID, data.D8));
    } else if (value.includes('D9')) {
      targetPoint && targetPoint.insertAdjacentHTML('afterend', sellingPoints(ID, data.D9));
    }
  } else {
    targetPoint && targetPoint.insertAdjacentHTML('afterend', sellingPoints(ID, data.D8));
  }
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('label') && target.closest('.productpage-right-size-tabs')) {
      const clicckedItem = target.closest('label');
      const { value } = clicckedItem.dataset;
      if (value.includes('D8')) {
        const strengthText = 'EXTRA STRENGTH DELTA-8 THC';
        const perCornText = '100MG PER CONE';
        document.querySelector(`.${ID}__sellingPoints-list-item.strength`).innerText = strengthText;
        document.querySelector(`.${ID}__sellingPoints-list-item.perCorn`).innerText = perCornText;
      } else if (value.includes('D9')) {
        const strengthText = 'EXTRA STRENGTH DELTA-9 THC';
        const perCornText = '25MG PER CONE';
        document.querySelector(`.${ID}__sellingPoints-list-item.strength`).innerText = strengthText;
        document.querySelector(`.${ID}__sellingPoints-list-item.perCorn`).innerText = perCornText;
      }
    }
  });

  if (VARIATION === 'Control') {
    return;
  }
  const mainData = VARIATION === '1' ? variationOneInfo : variationTwoInfo;
  init(mainData);
};
