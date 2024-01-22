import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('.announcement-bar');

  const htmlStr = `<div class='${ID}__announcementBar'>
    <div class='${ID}__announcementBar__content'>
      <span>FREE EXPRESS SHIPPING ON ALL ORDERS</span>
    </div>
  </div>`;
  if (!document.querySelector(`.${ID}__announcementBar`)) {
    anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);
  }
};

export default () => {
  setup(); //use if needed

  init();
};
