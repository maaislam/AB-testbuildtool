/*eslint-disable no-unused-vars */
import setup from './services/setup';

import shared from './shared/shared';
import { obsIntersection, observeDOM, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

let pageCounter = 0;
//eslint-disable-next-line prefer-const
let paginantionIndex = [];

const init = () => {
  const paginationParent = document.querySelector('.boost-sd__pagination');
  const paginations = paginationParent.querySelectorAll('.boost-sd__pagination-number');
  const paginationLastItem = paginations[paginations.length - 1];
  const lastPagination = parseInt(paginationLastItem.textContent);
  //const nextButtonElem = paginationLastItem?.querySelector('a');
  //const nextButtonUrl = nextButtonElem?.href;

  if (lastPagination === pageCounter) {
    return;
  }

  const { href } = window.location;

  const url = new URL(href);

  url.searchParams.set('page', pageCounter);
  console.log('url', url);
  const currentPageList = document.querySelector('.boost-sd__product-list');

  //const isPaginationIndex = paginantionIndex.find((item) => item === pageCounter);

  //if (!isPaginationIndex) return;

  const loadingElem = `<div class="${ID}__loader">Loading more...</div>`;
  if (!document.querySelector(`.${ID}__loader`)) {
    currentPageList.insertAdjacentHTML('afterend', loadingElem);
  }
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      setTimeout(() => {
        const collection = doc.querySelectorAll('.boost-sd__product-list > div');
        collection.forEach((item) => {
          currentPageList.insertAdjacentElement('beforeend', item);
        });

        pageCounter += 1;
        const loaderElem = document.querySelector(`.${ID}__loader`);
        loaderElem?.remove();
      }, 5000);
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
    const listItems = document.querySelectorAll('.boost-sd__pagination-number');
    const listArray = Array.from(listItems);
    const activeIndex = listArray?.find(
      (item) => item.classList.contains('boost-sd__pagination-number--active')
      //eslint-disable-next-line function-paren-newline
    );

    const activeIndexNum = parseInt(activeIndex.textContent);

    console.log('activeIndexNum', activeIndexNum);

    if (activeIndexNum) {
      pageCounter = activeIndexNum + 1;
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

  observeDOM('.boost-sd__filter-product-list .boost-sd-container', (mutation) => {
    pollerLite(['.boost-sd__product-list', '.boost-sd__pagination'], () => {
      pageCounter = 0;
      paginantionIndex = [];
      getActiveFn();
    });
  });
};
