/*eslint-disable no-restricted-syntax */
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const limitTo75NonSpaceCharacters = (text) => {
  //Remove spaces and then limit to 75 non-space characters
  let nonSpaceCharCount = 0;
  let truncatedText = '';

  for (const char of text) {
    if (char !== ' ') {
      nonSpaceCharCount++;
    }
    truncatedText += char;

    //Stop once we reach 75 non-space characters
    if (nonSpaceCharCount > 75) {
      truncatedText += '...'; //Indicate truncation
      break;
    }
  }

  return truncatedText;
};

const init = () => {
  const getSearchParamValue = (param) => new URLSearchParams(window.location.search).get(param);
  const searchResult = getSearchParamValue('s');
  const mainWrapper = document.querySelector('main#content');
  const pageContentWrapper = document.querySelector('main#content .page-content');
  pageContentWrapper.classList.add(`${ID}__page-content`);

  if (!mainWrapper.querySelector(`.${ID}__header`)) {
    mainWrapper.insertAdjacentHTML(
      'afterbegin',
      `<div class="${ID}__header">
        Søgeresultater for “<span>${searchResult}</span>”
      </div>`
    );
  }

  const allContent = pageContentWrapper.querySelectorAll('article.post');
  allContent.forEach((item) => {
    item.classList.add(`${ID}__post`);
    const titleElement = item.querySelector('h2.entry-title');
    const title = titleElement.textContent.trim();
    const truncatedText = limitTo75NonSpaceCharacters(title);
    titleElement.textContent = truncatedText;
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
      wrapper.querySelector('a').click();
    } else if (target.matches('main#content') && document.body.classList.contains('overlay-wrap')) {
      document.querySelector('.btn-wrap .open-input')?.click();
    }
  });
  init();
};