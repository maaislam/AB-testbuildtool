import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const formatTime = (unit) => String(unit).padStart(2, '0');
const updateCountdown = () => {
  const currentDate = new Date();
  const estData = currentDate.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour12: false
  });

  const limitHour = parseInt(estData.split(' ')[1].split(':')[0], 10);

  const countDownDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    14,
    0
  );
  let distance;

  if (limitHour > 14) {
    const tomorrowTime = countDownDate.getTime() + 86400000;
    distance = Math.abs(currentDate - tomorrowTime);

    const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    document.querySelector(`.${ID}__hour`).textContent = `${hours}`;
    document.querySelector(`.${ID}__min`).textContent = `${minutes}`;
    document.querySelector(`.${ID}__sec`).textContent = `${seconds}`;
    return;
  }

  distance = Math.abs(currentDate - countDownDate.getTime());

  const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));
  console.log('🚀 ~ updateCountdown ~ hours:', hours);
  console.log('🚀 ~ updateCountdown ~ minutes:', minutes);
  console.log('🚀 ~ updateCountdown ~ seconds:', seconds);

  document.querySelector(`.${ID}__hour`).textContent = `${hours}`;
  document.querySelector(`.${ID}__min`).textContent = `${minutes}`;
  document.querySelector(`.${ID}__sec`).textContent = `${seconds}`;
};

const init = () => {
  const targetElement = document.querySelector('.section_5');
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
