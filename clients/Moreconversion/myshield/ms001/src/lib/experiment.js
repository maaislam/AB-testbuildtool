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
        <p class='${ID}__banner-left-title ${ID}__banner-left-title--desktop'>DON’T MISS OUT OF SHIELD’S BACK TO SCHOOL FLASH SALE!</p>
        <p class='${ID}__banner-left-text ${ID}__banner-left-title--desktop'>(WHILE SUPPLIES LAST)</p>

        <p class='${ID}__banner-left-title ${ID}__banner-left-title--mobile'>Early Black Friday</p>
        <p class='${ID}__banner-left-text ${ID}__banner-left-title--mobile'>Up To 56% OFF + Free Gifts</p>
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
        <a href="" class='${ID}__banner-right-btn ${ID}__banner-right-btn--desktop'>View Offer Details →</a>
        <a href="" class='${ID}__banner-right-btn ${ID}__banner-right-btn--mobile'>View Offer →</a>
      </div>
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
