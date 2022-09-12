//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import { searchBar, searchFindText, searchIcon } from './component/structure';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  if (VARIATION === 'control') {
    return;
  }

  if (!document.cookie.includes('testLK#2=true')) {
    document.cookie = 'testLK#2=true';
  }

  const initFunction = (count) => {
    pollerLite(['.collection__products .js-grid'], () => {
      document
        .querySelector(`.collection__products .js-grid > div:nth-child(${count})`)
        ?.insertAdjacentElement('afterend', document.querySelector('#search-popdown'));

      document
        .querySelector('#search-popdown .item--loadbar')
        .insertAdjacentHTML(
          'beforebegin',
          searchFindText(ID, "CAN'T FIND WHAT YOU'RE LOOKING FOR?")
        );

      if (document.querySelector('#search-popdown').classList.contains('search-popdown')) {
        document.querySelector('#search-popdown').classList.remove('search-popdown');
      }

      document
        .querySelector('#search-popdown button')
        .insertAdjacentHTML('beforebegin', searchIcon(ID));

      document.querySelector('#search-popdown .search__predictive__close').style.display = 'none';

      document.querySelector('#search-popdown input').addEventListener('input', (e) => {
        if (e.target.value !== '') {
          document
            .querySelector('#search-popdown .search__predictive__close')
            .removeAttribute('style');
        }
        if (e.target.value === '') {
          document.querySelector('#search-popdown .search__predictive__close').style.display =
            'none';
        }
      });

      document.querySelector(`.${ID}__searchIcon`).addEventListener('click', (e) => {
        const searValue = document.querySelector('#search-popdown input').value || '';
        window.location.href = `https://luciekaas.com/search?q=${searValue}`;
      });
      document.body.addEventListener('click', (e) => {
        if (e.target.closest('.search__predictive__close')) {
          document.querySelector('#search-popdown .search__predictive__close').style.display =
            'none';
        }

        if (
          e.target.closest('button') &&
          e.target.closest('button').getAttribute('data-toggle-grid') === '4'
        ) {
          document
            .querySelector('.collection__products .js-grid > div:nth-child(4)')
            .insertAdjacentElement(
              'afterend',
              document.querySelector('.collection__products .js-grid > #search-popdown')
            );
        }

        if (
          e.target.closest('button') &&
          e.target.closest('button').getAttribute('data-toggle-grid') !== '4'
        ) {
          document
            .querySelector('.collection__products .js-grid > div:nth-child(6)')
            .insertAdjacentElement(
              'afterend',
              document.querySelector('.collection__products .js-grid > #search-popdown')
            );
        }
      });
    });
  };

  if (
    document.querySelector('.collection__products .js-grid').getAttribute('data-grid-large') !== '4'
  ) {
    initFunction(6);
  }

  if (
    document.querySelector('.collection__products .js-grid').getAttribute('data-grid-large') === '4'
  ) {
    initFunction(4);
  }
};
