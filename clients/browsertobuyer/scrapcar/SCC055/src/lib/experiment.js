import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const dateHoursLater = (hours) => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + hours);

  //const options = { weekday: 'long', month: 'long' };
  const dayOfWeek = currentDate.toLocaleDateString('en-GB', { weekday: 'long' });
  const month = currentDate.toLocaleDateString('en-GB', { month: 'long' });
  const day = currentDate.getDate();

  //Add suffix to day
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${dayOfWeek} ${day}${getDaySuffix(day)} ${month}`;
};

export default () => {
  setup();
  const newlineText = 'Provide the details below';
  const hour = VARIATION === '1' ? 48 : 72;
  const newMsg = `Want your vehicle collected by <span class="highlight">${dateHoursLater(
    hour
  )}</span>?`;

  const headerElement = document.querySelector('.offerform-header');
  headerElement.innerHTML = newMsg;

  if (document.querySelector(`.${ID}__newline`)) return;

  headerElement.insertAdjacentHTML(
    'afterend',
    `<h2 class="${ID}__newline inner">${newlineText}</h2>`
  );
};
