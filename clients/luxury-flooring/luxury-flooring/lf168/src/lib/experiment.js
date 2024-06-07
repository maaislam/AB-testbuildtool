import setup from './services/setup';
import shared from './shared/shared';
import { widget } from './components/widget';
import { uspsData } from './data/data';

const { ID, VARIATION } = shared;
const init = () => {
  const header = document.querySelector('header > .header');
  const searchElement = header.querySelector('.header-usps-search');

  //insert usps list into search element
  if (document.querySelector(`.${ID}__widgetContainer`)) {
    document.querySelector(`.${ID}__widgetContainer`).remove();
  }

  searchElement.insertAdjacentHTML('beforeend', widget(ID, uspsData));
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__roomVisualizer`)) {
      window.roomvo.startStandaloneVisualizer();
    }
  });

  init();
};
