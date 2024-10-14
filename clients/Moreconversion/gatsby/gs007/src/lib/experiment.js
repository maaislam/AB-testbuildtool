import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();

  const attachpoint = document.querySelector('.offer-btn');
  const htmlStr = `
      <div class="${ID}__offer">
        <div class="${ID}__container">
            <div class="${ID}__content">
                <h2 class="${ID}__title">BUY 1 GET 1 FREE</h2>
                <p class="${ID}__description">1. Add at least 2 pairs of shoes to your cart</p>
                <p class="${ID}__description">2. Get the 2nd pair automatically for <span>FREE</span></p>
            </div>
        </div>
      </div>`;

  if (document.querySelector(`.${ID}__offer`)) return;
  //attachpoint.style.display = 'none';

  attachpoint.insertAdjacentHTML('beforebegin', htmlStr);
};
