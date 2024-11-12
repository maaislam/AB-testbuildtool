import startTimer from './helpers/startTimer';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const endDate = '12/03/2024'; //MM/DD/YYYY

const init = () => {
  const attachPoint = document.querySelector('.announcement-bar-section');

  const htmlStr = `
  <div class='${ID}__bannerWrapper'>
    <div class='${ID}__banner'>
      <div class='${ID}__banner-left'>
        <p class='${ID}__banner-left-title'>DON’T MISS OUT OF SHIELD’S BACK TO SCHOOL FLASH SALE!</p>
        <p class='${ID}__banner-left-text'>(WHILE SUPPLIES LAST)</p>
      </div>
      <div class='${ID}__banner-center'>
        <div class='${ID}__banner-center-timer'>
          <div class="countdown-timer apply-grid show-day">
            <span class="value hou" id="${ID}__hours"></span>
            <span class="value min" id="${ID}__minutes"></span>
            <span class="value sec" id="${ID}__seconds"></span>
            <span class="label hou">Hours</span>
            <span class="label min">Minutes</span>
            <span class="label sec">Seconds</span>
          </div>
        </div>
        <div>
          <p class='${ID}__banner-center-title'>50% off your first purchase!</p>
          <p class='${ID}__banner-center-text'>Plus our 100 day trial period moneyback guarantee</p>
        </div>
      </div>
      <div class='${ID}__banner-right'>
        <a href="" class='${ID}__banner-right-btn'>View Offer Details →</a>
      </div>
    </div>

    <div class='${ID}__banner-mobile'>
        <a href="https://myshieldsystem.com/products/shield-system" class='${ID}__banner-mobile-btn'>Shop Shield →</a>
    </div>
  </div>
  `;

  if (!document.querySelector(`.${ID}__banner`)) {
    attachPoint.insertAdjacentHTML('beforebegin', htmlStr);
    startTimer(ID, endDate);
  }
};

export default () => {
  setup();
  init();
};
