import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const getSearchParamValue = (param) => new URLSearchParams(window.location.search).get(param);
  const searchResult = getSearchParamValue('s');
  const mainWrapper = document.querySelector('main#content');
  const pageContentWrapper = document.querySelector('main#content .page-content');
  pageContentWrapper.classList.add(`${ID}__page-content`);

  if (!mainWrapper.querySelector(`.${ID}__header`)) {
    mainWrapper.querySelector('.page-header').insertAdjacentHTML(
      'beforebegin',
      `<div class="${ID}__header">
        Søgeresultater for “<span>${searchResult}</span>”
      </div>`
    );
  }

  const allContent = pageContentWrapper.querySelectorAll('article.post');
  allContent.forEach((item) => {
    item.classList.add(`${ID}__post`);
    const fullText = item.querySelector('p').textContent.trim();
    const words = fullText.split(' ');
    if (words.length > 12) {
      const truncatedText = `${words.slice(0, 12).join(' ')} […]`;
      const truncatedElement = document.createElement('p');
      truncatedElement.textContent = truncatedText;
      truncatedElement.classList.add(`${ID}__truncated-text`);
      if (!item.querySelector(`.${ID}__truncated-text`)) {
        item.querySelector('p').insertAdjacentElement('beforebegin', truncatedElement);
      }

      const readMoreButton = document.createElement('span');
      readMoreButton.classList.add(`${ID}__more`);
      readMoreButton.textContent = 'Læs mere >';

      if (!item.querySelector(`.${ID}__more`)) {
        item.insertAdjacentElement('beforeend', readMoreButton);
      }
    }
  });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__more`)) {
      const clickedItem = target.closest(`.${ID}__more`);
      const wrapper = clickedItem.closest('.post');
      wrapper.classList.add('show');
      clickedItem.classList.add(`${ID}__less`);
      clickedItem.classList.remove(`${ID}__more`);
      clickedItem.textContent = 'Læs mindre >';
    } else if (target.closest(`.${ID}__less`)) {
      const clickedItem = target.closest(`.${ID}__less`);
      const wrapper = clickedItem.closest('.post');
      wrapper.classList.remove('show');
      clickedItem.classList.add(`${ID}__more`);
      clickedItem.classList.remove(`${ID}__less`);
      clickedItem.textContent = 'Læs mere >';
    }
  });
  init();
};
