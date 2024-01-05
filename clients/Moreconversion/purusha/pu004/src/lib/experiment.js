import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const getTimeToMidnight = () => {
  const now = new Date();

  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const timeUntilMidnight = midnight - now;

  const hours = Math.floor(timeUntilMidnight / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours} hrs ${minutes} min`;
};
const getThreeDaysFromToday = () => {
  const today = new Date();
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = threeDaysLater.getDate();
  const month = monthsArray[threeDaysLater.getMonth()];

  return `${date} ${month}`;
};

export default () => {
  setup();

  const htmlStr = () => {
    return `
      <div class="${ID}__shippingdate">      
        <p>Fastest 3-Day Delivery On <span>${getThreeDaysFromToday()}</span>. Order Within <span class="${ID}__timetomidnight">${getTimeToMidnight()}</span>.</p>
      </div>
    `;
  };
  const attachpoint = document.querySelector('.ProductForm__BuyButtons');

  //update time to midlight every minute
  setInterval(() => {
    const timeToMidnightElem = document.querySelector(`.${ID}__timetomidnight`);
    if (timeToMidnightElem) {
      timeToMidnightElem.innerHTML = getTimeToMidnight();
    }
  }, 60000);

  if (document.querySelector(`.${ID}__shippingdate`)) return;
  attachpoint.insertAdjacentHTML('afterend', htmlStr());
};
