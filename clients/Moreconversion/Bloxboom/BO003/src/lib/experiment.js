import { deliveryIcon, orderIcon, supportIcon } from './assets/svg';
import { onUrlChange } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const benefitHTML = () => {
  const htmlStr = `<div class="${ID}__benefitWrapper info-section">
      <div class="info-item">
          <span class='${ID}__icon'>${orderIcon}</span>
          <div class='${ID}__text'>10k+ of orders completed</div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
          <span class='${ID}__icon'>${supportIcon}</span>
          <div class='${ID}__text'>24/7 live support</div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
          <span class='${ID}__icon'>${deliveryIcon}</span>
          <div class='${ID}__text'>Instant delivery guarantee</div>
      </div>
  </div>`;

  return htmlStr;
};

const isHomePage = () => {
  const path = window.location.pathname;

  const regex = /^\/([a-z]{2})?\/?$/;
  return regex.test(path);
};

const init = () => {
  if (!isHomePage()) return;

  const trustpilotBadge = document.querySelector('section .trustpilot-widget');
  const trustpilotBadgeParent = trustpilotBadge.parentElement.parentElement;

  if (!document.querySelector(`.${ID}__benefitWrapper`)) {
    trustpilotBadgeParent.insertAdjacentHTML('afterend', benefitHTML());
  }
};

export default () => {
  setup();

  init();

  onUrlChange(() => {
    init();
  });
};
