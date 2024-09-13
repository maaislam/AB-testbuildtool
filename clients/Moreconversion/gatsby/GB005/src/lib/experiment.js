import { dataV1, dataV2 } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.product-single__description img');
  const guaranteeItem = document.querySelector('#section-guarantee .grid__item:last-child');
  const isPrdDescHasBtn = document.querySelector('.product-single__description:has(button)');

  attachPoint.classList.add(`${ID}__hide`);
  guaranteeItem.classList.add(`${ID}__guaranteeItem`);

  if (!isPrdDescHasBtn) {
    document.querySelector('.btn--add-to-cart').classList.add(`${ID}__addToCart`);
  }

  const data = VARIATION === '1' ? dataV1 : dataV2;

  const usps = () => {
    const htmlStr = `<div class='${ID}__usps'>
      ${data.map((item) => `
        <div class='usp'>
          <span class='usp-icon'>${item.icon}</span>
          <span class='usp-title'>${item.title}</span>
        </div>
      `).join('')}
    </div>`;

    return htmlStr;
  };

  if (!document.querySelector(`.${ID}__usps`)) {
    attachPoint.insertAdjacentHTML('beforebegin', usps());

    const uspsElem = document.querySelector(`.${ID}__usps`);
    const spanElem = uspsElem.closest('span');
    if (spanElem) {
      const isUnderLine = spanElem.style.textDecoration;
      if (isUnderLine) {
        spanElem.style.textDecoration = 'none';
      }
    }
  }

  const guaranteeItemElem = document.querySelector(`.${ID}__guaranteeItem`);
  if (guaranteeItemElem && VARIATION === '2') {
    const guaranteeTitle = guaranteeItemElem.querySelector('.guarantee-title');
    const guaranteeText = guaranteeItemElem.querySelector('.guarantee-text p');

    guaranteeTitle.textContent = '45-Day Guarantee';
    guaranteeText.textContent = 'If you want to exchange or return your shoes, we offer a full 45-day guarantee so that you can try all of our styles worry-free!';
  }
};

export default () => {
  setup();
  init();
};
