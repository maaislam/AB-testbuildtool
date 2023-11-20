import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('[data-section-type="header"]');
  const htmlStr = `
    <div class="${ID}__noticeBar">
      <span class="${ID}__noticeBar-notice">Free Shipping Over $85</span>
      <div class="${ID}__noticeBar-divider"></div>
      <span class="${ID}__noticeBar-notice">Veterinarian Recommended</span>
      <div class="${ID}__noticeBar-divider"></div>
      <span class="${ID}__noticeBar-notice">365 Day Guarantee</span>
    </div>
  `;
  anchorPoint.insertAdjacentHTML('afterbegin', htmlStr);
};
