import quantityWrapper from './components/quantityWrapper';
import shippingCalculate from './components/shippingCalculate';
import { wrapper } from './components/wrapper';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

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

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelectorAll(`.${ID}__shippingCalculate .within-time`).forEach((item) => {
      item.textContent = `${hours}hr ${minutes}mins ${seconds}sec`;
    });
    document.querySelectorAll(`.${ID}__shipping__message--today`).forEach((item) => {
      item.style.display = 'none';
    });

    document.querySelectorAll(`.${ID}__shipping__message--tomorrow`).forEach((item) => {
      item.style.display = 'block';
    });
    return;
  }

  distance = Math.abs(currentDate - countDownDate.getTime());

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelectorAll(`.${ID}__shippingCalculate .remain-time`).forEach((item) => {
    item.textContent = `${hours}hr ${minutes}mins ${seconds}sec`;
  });
  document.querySelectorAll(`.${ID}__shipping__message--today`).forEach((item) => {
    item.style.display = 'block';
  });

  document.querySelectorAll(`.${ID}__shipping__message--tomorrow`).forEach((item) => {
    item.style.display = 'none';
  });
};

const init = () => {
  //Initialize experiment-specific code here

  const targetElement = document.querySelector('#join_pkg');
  const box = targetElement.querySelector('.join_package_box');
  const todayMessage = targetElement
    .querySelector('.shipping__message--today')
    ?.textContent.split('if ordered')[0]
    .trim();
  const tomorrowMessage = targetElement
    .querySelector('.shipping__message--tomorrow')
    ?.textContent.split('if ordered')[0]
    .trim();

  if (!document.querySelector(`.${ID}__quantityWrapper`) && VARIATION === '2') {
    box.insertAdjacentHTML('beforebegin', quantityWrapper(ID));
  }

  targetElement.querySelectorAll('.package').forEach((item) => {
    if (!item.querySelector(`.${ID}__wrapper`) && VARIATION === '1') {
      item.querySelector('.packge_button_outer').insertAdjacentHTML('afterend', wrapper(ID));
    }

    if (
      !item.querySelector(`.${ID}__shippingCalculate`) &&
      VARIATION === '2' &&
      todayMessage &&
      tomorrowMessage
    ) {
      item
        .querySelector('.comn_btn_box')
        .insertAdjacentHTML('afterend', shippingCalculate(ID, todayMessage, tomorrowMessage));
    }
  });

  if (VARIATION === '2' && todayMessage && tomorrowMessage) {
    setInterval(updateCountdown, 1000);
  }
};

export default () => {
  setup(); //use if needed

  init();
};
