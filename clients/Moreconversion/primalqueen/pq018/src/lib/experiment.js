import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const formatTime = (unit) => String(unit).padStart(2, '0');
const updateCountdown = () => {
  const currentDate1 = new Date();
  const estData1 = currentDate1.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour12: false
  });

  const limitHour1 = parseInt(estData1.split(' ')[1].split(':')[0], 10);

  const countDownDate1 = new Date(
    currentDate1.getFullYear(),
    currentDate1.getMonth(),
    currentDate1.getDate(),
    14,
    0
  );
  let distance1;

  if (limitHour1 > 14) {
    const tomorrowTime1 = countDownDate1.getTime() + 86400000;
    distance1 = Math.abs(currentDate1 - tomorrowTime1);

    const hours1 = formatTime(Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes1 = formatTime(Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds1 = formatTime(Math.floor((distance1 % (1000 * 60)) / 1000));

    document.querySelector(`.${ID}__hour`).textContent = `${hours1}`;
    document.querySelector(`.${ID}__min`).textContent = `${minutes1}`;
    document.querySelector(`.${ID}__sec`).textContent = `${seconds1}`;
    return;
  }

  distance1 = Math.abs(currentDate1 - countDownDate1.getTime());

  const hours1 = formatTime(Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes1 = formatTime(Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds1 = formatTime(Math.floor((distance1 % (1000 * 60)) / 1000));

  document.querySelector(`.${ID}__hour`).textContent = `${hours1}`;
  document.querySelector(`.${ID}__min`).textContent = `${minutes1}`;
  document.querySelector(`.${ID}__sec`).textContent = `${seconds1}`;
};

const init = () => {
  const { pathname } = window.location;
  const targetElement = document.querySelector('.section_5');
  if (pathname.includes('/pages/go')) {
    targetElement.classList.add(`${ID}__section_5`);
  } else {
    targetElement.classList.add(`${ID}__section__5`);
  }
  if (!document.querySelector(`.${ID}__wrapper`)) {
    targetElement.insertAdjacentHTML('beforeend', wrapper(ID));
  }

  pollerLite(['.join_package_box .package.package1'], () => {
    const wrapper = document.querySelector('.join_package_box .package.package1');
    const priceElement = wrapper.querySelector('.price_text2');
    const comparePriceElement = priceElement.querySelector('span');
    const comparePrice = parseFloat(comparePriceElement.textContent.replace('$', ''));
    const sellPriceElement = priceElement.querySelector('span').nextSibling;
    const sellPrice = parseFloat(sellPriceElement.textContent.replace('$', ''));

    const shippingDate = wrapper.querySelector('.shipping__message-highlight');

    const dateMatch = shippingDate.textContent.trim().match(/[A-Za-z]+\s\d{2}/); //Matches "Month Day" format
    const date = dateMatch ? dateMatch[0] : '';

    if (date) {
      document.querySelector(`.${ID}__timerTitle span`).textContent = `Today, ${date}`;
    }

    if (sellPrice && comparePrice) {
      const percentageOff = Math.round(((comparePrice - sellPrice) / comparePrice) * 100);
      document.querySelector(`.${ID}__announcementBar span`).textContent = `${percentageOff}% OFF`;
      const bannerButton = document.querySelector(`.${ID}__wrapper .common_btn`);
      if (bannerButton) {
        bannerButton.childNodes[0].textContent = `JOIN PRIMAL QUEEN - Up to ${percentageOff}% Off`;
      }
    }

    setInterval(updateCountdown, 1000);
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
