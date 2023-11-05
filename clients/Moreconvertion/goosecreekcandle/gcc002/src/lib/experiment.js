import setup from './services/setup';
import shared from './shared/shared';
import { data } from './data/data';

const { ID } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('.product-page--submit-action');

  const htmlStr = `<div class='${ID}__container'>
      <div class='${ID}__wrapper'>
      ${data.map((item) => {
        const paymentIcon = `<div class='${ID}__item'>
          <div class='${ID}__paymentIconWrapper'>
            <div class='${ID}__paymentIcon ${item.border ? `${ID}__borderedImage` : `${ID}__image`}'>
              <img src='${item.paymentIcon}' alt='icon' />
            </div>
          </div>
        </div>`;
        return paymentIcon;
      }).join('')}
    </div>
  </div>`;

  if (!document.querySelector(`.${ID}__wrapper`)) {
    anchorPoint.insertAdjacentHTML('afterend', htmlStr);
  }
};
