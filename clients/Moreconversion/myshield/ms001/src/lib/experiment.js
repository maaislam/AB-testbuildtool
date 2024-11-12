import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachPoint = document.querySelector('.announcement-bar-section');

  const htmlStr = `
    <div class='${ID}__banner'>
      <div class='${ID}__banner-left'>
        <p class='${ID}__banner-left-title'>DON’T MISS OUT OF SHIELD’S BACK TO SCHOOL FLASH SALE!</p>
        <p class='${ID}__banner-left-text'>(WHILE SUPPLIES LAST)</p>
      </div>
      <div class='${ID}__banner-center'>
        <div class='${ID}__banner-center-timer'></div>
        <p class='${ID}__banner-center-title'>50% off your first purchase!</p>
        <p class='${ID}__banner-center-text'>Plus our 100 day trial period moneyback guarantee</p>
      </div>
      <div class='${ID}__banner-right'>
        <div class='${ID}__banner-right-btn'>
          <a href='#' class='${ID}__banner-right-btn-link'>View Offer Details →</a>
        </div>
      </div>
    </div>
  `;

  attachPoint.insertAdjacentHTML('beforebegin', htmlStr);
};

export default () => {
  setup();
  init();
};
