import setup from './services/setup';
import shared from './shared/shared';
import { crossBtn } from './assets/icons';

const { ID, VARIATION } = shared;

const init = () => {
  const searchElement = document.querySelector('predictive-search');
  const inputElement = searchElement.querySelector('input#Search');
  const controlCloseElement = searchElement.querySelector('#close_search_form');
  inputElement.setAttribute('placeholder', 'Search for Dresses, Rompers, Skirts...');

  if (!document.querySelector(`.${ID}__crossBtn`) && VARIATION === '2') {
    controlCloseElement.insertAdjacentHTML(
      'afterbegin',
      `<div class="${ID}__crossBtn">${crossBtn}</div>`
    );
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__crossBtn`)) {
      e.preventDefault();
      const inputElement = document.querySelector('predictive-search input#Search');
      const searchResults = document.querySelector('#predictive-search');
      searchResults.style.display = 'none';
      inputElement.value = '';
      inputElement.focus();
    }
  });

  if (VARIATION === 'Control') return;

  init(); //use if needed
};
