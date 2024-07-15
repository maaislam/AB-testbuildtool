/*eslint-disable no-unused-vars */
import setup from './services/setup';

import shared from './shared/shared';
import { obsIntersection, observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

let pageCounter = 0;

const init = () => {
  const paginationLastItem = document.querySelector('.pagination')?.lastElementChild;
  const nextButtonElem = paginationLastItem?.querySelector('a');
  const nextButtonUrl = nextButtonElem?.href;

  if (!nextButtonUrl) {
    return;
  }

  const url = new URL(nextButtonUrl);
  url.searchParams.set('page', pageCounter);
  const currentPageList = document.querySelector('#template--collection');
  const loadingElem = `<div class="${ID}__loader">Loading more</div>`;

  currentPageList.insertAdjacentHTML('afterend', loadingElem);
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const collection = doc.querySelectorAll('#template--collection li');
      collection.forEach((item) => {
        currentPageList.insertAdjacentElement('beforeend', item);
      });

      pageCounter += 1;
      const loaderElem = document.querySelector(`.${ID}__loader`);
      loaderElem.remove();
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default () => {
  setup();
  //console.log(ID);

  if (VARIATION === 'control') return;

  const getActiveFn = () => {
    const listItems = document.querySelectorAll('.pagination .page-item');
    const listArray = Array.from(listItems);
    const activeIndex = listArray?.findIndex((item) => item.classList.contains('active'));
    if (activeIndex) {
      pageCounter = activeIndex + 1;
    }
  };

  getActiveFn();

  const obserElem = document.querySelector('.collection-bottom-description > span');
  const callBackHandler = (entry) => {
    if (entry.isIntersecting) {
      init();
    }
  };
  obsIntersection(obserElem, 1, callBackHandler);

  observeDOM('#CollectionProductGrid', (mutation) => {
    pageCounter = 0;
    getActiveFn();
  });
};
