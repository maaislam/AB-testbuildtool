import setup from './services/setup';
import shared from './shared/shared';
import { searchIcon } from './assets/icons';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const searchElement = document.querySelector('main-search');
  const targetPoint = document.querySelector('.accounts ul');
  const searchIconElement = searchElement.querySelector('.icon-search');
  const resetButton = searchElement.querySelector('button[type="reset"]');
  const inputBox = searchElement.querySelector('input[type="search"]');

  console.log(inputBox, 'inputBox');

  if (!document.querySelector(`.${ID}__searchElement`)) {
    window.innerWidth <= 777
      ? document.querySelector('#header-grid').insertAdjacentElement('beforebegin', searchElement)
      : targetPoint.insertAdjacentElement('beforebegin', searchElement);

    searchElement.classList.add(`${ID}__searchElement`);
  }

  if (!document.querySelector('.custom-search-icon')) {
    searchIconElement.insertAdjacentHTML('beforebegin', searchIcon);
  }

  if (inputBox) inputBox.placeholder = "Search for Men's...";
  if (resetButton) resetButton.innerHTML = 'Clear Search';
};

export default () => {
  setup(); //use if needed

  init();
};
