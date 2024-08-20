/*eslint-disable no-unused-vars */
import setup from './services/setup';

import shared from './shared/shared';
import { obsIntersection, observeDOM, pollerLite } from './helpers/utils';
import prodCard from './components/prodCard';

const { ID, VARIATION } = shared;

let pageCounter = 0;
//eslint-disable-next-line prefer-const
let paginantionIndex = [];

const init = () => {
  const paginationParent = document.querySelector('.boost-sd__pagination');
  const paginations = paginationParent.querySelectorAll('.boost-sd__pagination-number');
  const paginationLastItem = paginations[paginations.length - 1];
  const lastPagination = parseInt(paginationLastItem.textContent);
  console.log('🚀 ~ init ~ lastPagination:', lastPagination);
  //const nextButtonElem = paginationLastItem?.querySelector('a');
  //const nextButtonUrl = nextButtonElem?.href;

  if (lastPagination + 1 === pageCounter) {
    console.log('🚀 no pages left');
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

  const fetchUrl = `https://services.mybcapps.com/bc-sf-filter/filter?_=pf&shop=goose-creek-co.myshopify.com&page=${pageCounter}&limit=24&sort=manual&locale=en&event_type=init&pg=collection_page&build_filter_tree=true&collection_scope=129543700555&money_format=%26%2336%3B%7B%7Bamount%7D%7D&money_format_with_currency=%26%2336%3B%7B%7Bamount%7D%7D+USD&viewAs=grid--4&device=&first_load=false&productImageWidth=300&productPerRow=4&widget_updated_at=${Date.now()}&templateId=hWrzPXMYu4&isMobile=false&isTabletPortraitMax=false&behavior=refresh&tag=&t=${Date.now()}&sid=9f1bbba0-f15d-3974-2d7c-4baf3609519f&sort_first=available&product_available=false&variant_available=false`;
  console.log('🚀 ~ init ~ pageCounter:', pageCounter);
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      //console.log('🚀 ~ .then ~ data:', data);

      const { products } = data;

      const insertElem = document.querySelector('.boost-sd__product-list');

      products.forEach((product) => {
        const prodHtml = prodCard(product);
        insertElem.insertAdjacentHTML('beforeend', prodHtml);
      });
      pageCounter += 1;
      const loaderElem = document.querySelector(`.${ID}__loader`);
      loaderElem?.remove();
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
