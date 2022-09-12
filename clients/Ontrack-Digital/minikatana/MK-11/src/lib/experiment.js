//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  if (VARIATION === 'control') {
    return;
  }

  if (!document.cookie.includes('testMK#11=true')) {
    document.cookie = 'testMK#11=true';
  }

  const calculateTopFunction = () => {
    return window.getComputedStyle(document.querySelector('#sticky-wrapper .header-bottom')).height;
  };

  const calculateTotalHeight = () => {
    const stickyHeaderBottom = parseInt(
      window
        .getComputedStyle(document.querySelector('#sticky-wrapper .header-bottom'))
        .height.split('px')[0]
    );
    const searchHeight = parseInt(
      window
        .getComputedStyle(document.querySelector('#sticky-wrapper .header-bottom + .search-form'))
        .height.split('px')[0]
    );

    return stickyHeaderBottom + searchHeight;
  };

  document
    .querySelector('#sticky-wrapper .header-bottom')
    ?.insertAdjacentElement('afterend', document.querySelector('#search-form-mobile .search-form'));

  document
    .querySelector(
      '#sticky-wrapper .header-bottom + .search-form .header-search__form input.input-group-field'
    )
    ?.setAttribute('placeholder', 'Search for katanas');

  document
    .querySelector('#sticky-wrapper .header-bottom + .search-form .header-search__form button')
    ?.insertAdjacentHTML(
      'beforebegin',
      `<div class="${ID}__searchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="currentColor" d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11z"/><path fill="currentColor" d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z"/></svg></div>`
    );

  document.querySelector(`.${ID}__searchIcon`)?.addEventListener('click', (e) => {
    const searchValue =
      document.querySelector(
        '#sticky-wrapper .header-bottom + .search-form .header-search__form input.input-group-field'
      ).value || '';
    window.location.href = `https://minikatana.com/search?type=product&q=${searchValue}`;
  });

  document
    .querySelector(
      '#sticky-wrapper .header-bottom + .search-form .header-search__form input.input-group-field'
    )
    ?.addEventListener('focus', (e) => {
      pollerLite(['html'], () => {
        setTimeout(() => {
          if (!document.querySelector('html').classList.contains('search-dropdown-open')) {
            document.querySelector('html').classList.add('search-dropdown-open');
          }
          document.querySelector(
            '#sticky-wrapper .header-bottom + .search-form .quickSearchResultsWrap'
          ).style.display = 'block';

          if (
            document
              .querySelector('.main-content #shopify-section-collection-template-default .toolbar')
              ?.classList.contains('toolbar-fix')
          ) {
            document.querySelector(
              '.main-content #shopify-section-collection-template-default .toolbar'
            ).style.top = `${calculateTotalHeight()}px`;
          }
        }, 100);
      });
    });

  document
    .querySelector(
      '#sticky-wrapper .header-bottom + .search-form .header-search__form a.close-search'
    )
    ?.addEventListener('click', (e) => {
      document.querySelector(
        '#sticky-wrapper .header-bottom + .search-form .header-search__form input.input-group-field'
      ).value = '';
      setTimeout(() => {
        if (
          document
            .querySelector('.main-content #shopify-section-collection-template-default .toolbar')
            ?.classList.contains('toolbar-fix')
        ) {
          document.querySelector(
            '.main-content #shopify-section-collection-template-default .toolbar'
          ).style.top = `${calculateTotalHeight()}px`;
        }
      }, 100);
    });

  window.addEventListener('scroll', (event) => {
    if (document.querySelector('#sticky-wrapper').classList.contains('is-sticky')) {
      document
        .querySelector('#sticky-wrapper .header-bottom + .search-form')
        .classList.add(`${ID}__sticky`);
      document.querySelector(
        '#sticky-wrapper .header-bottom + .search-form'
      ).style.top = `${calculateTopFunction()}`;
    }

    if (
      document
        .querySelector('.main-content #shopify-section-collection-template-default .toolbar')
        ?.classList.contains('toolbar-fix')
    ) {
      document.querySelector(
        '.main-content #shopify-section-collection-template-default .toolbar'
      ).style.top = `${calculateTotalHeight()}px`;
    }

    if (!document.querySelector('#sticky-wrapper').classList.contains('is-sticky')) {
      document
        .querySelector('#sticky-wrapper .header-bottom + .search-form')
        .classList.remove(`${ID}__sticky`);
    }
  });

  window.addEventListener('resize', (event) => {
    //do stuff here
    if (document.querySelector(`#sticky-wrapper .header-bottom + .search-form.${ID}__sticky`)) {
      document.querySelector(
        `#sticky-wrapper .header-bottom + .search-form.${ID}__sticky`
      ).style.top = `${calculateTopFunction()}`;
    }
    if (
      document
        .querySelector('.main-content #shopify-section-collection-template-default .toolbar')
        ?.classList.contains('toolbar-fix')
    ) {
      document.querySelector(
        '.main-content #shopify-section-collection-template-default .toolbar'
      ).style.top = `${calculateTotalHeight()}px`;
    }
  });

  window.addEventListener('orientationchange', () => {
    if (document.querySelector(`#sticky-wrapper .header-bottom + .search-form.${ID}__sticky`)) {
      document.querySelector(
        `#sticky-wrapper .header-bottom + .search-form.${ID}__sticky`
      ).style.top = `${calculateTopFunction()}`;
    }
    if (
      document
        .querySelector('.main-content #shopify-section-collection-template-default .toolbar')
        ?.classList.contains('toolbar-fix')
    ) {
      document.querySelector(
        '.main-content #shopify-section-collection-template-default .toolbar'
      ).style.top = `${calculateTotalHeight()}px`;
    }
  });
};
