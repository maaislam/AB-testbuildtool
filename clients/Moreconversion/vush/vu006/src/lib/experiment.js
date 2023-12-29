import setup from './services/setup';

import shared from './shared/shared';
import getSearchResult from './helpers/getSearchResult';

const { ID, VARIATION } = shared;

const closeElem = `<span class="icon-button__icon">
<span class="icon icon-new icon-header-menu-close ">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.462 6.479 5.538 19.402M5.538 6.479l12.924 12.923" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="6.667" stroke-linejoin="round"></path></svg>
  </span>
</span>`;
const newSearchBar = `<div class="${ID}__search-wrapper">
<input type="text" id="searchInput" placeholder="Search...">
  ${closeElem}
</div>
`;

const init = () => {
  const isMobile = window.innerWidth < 768;
  const searchBarSelector = isMobile
    ? '.header__row-mobile .header__icon-touch--search'
    : '.header__row-segment-desktop .header__icon-touch--search';
  const searchBar = document.querySelector(`${searchBarSelector}`);

  searchBar.classList.add(`${ID}__searchBar`);

  //create custom input
  const customInput = document.createElement('input');
  customInput.setAttribute('type', 'text');
  customInput.setAttribute('placeholder', 'Search for Empress, Vibrator, Lube..');
  customInput.classList.add(`${ID}__input`);
  searchBar.insertAdjacentHTML('beforebegin', newSearchBar);
  searchBar.style.display = 'none';

  document.querySelector(`.${ID}__search-wrapper`).addEventListener('input', (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      const overlay = document.querySelector('.quick-search__overlay');
      overlay.click();
    }

    getSearchResult(value).then((searchResHtml) => {
      const mainSearch = document.querySelector('#MainQuickSearch');
      const stockSearchForm = document.querySelector('.quick-search__form');
      const searchResultContainer = document.querySelector('.quick-search__results');
      mainSearch.classList.add('active');
      mainSearch.classList.add('quick-search--visible');
      mainSearch.setAttribute('aria-hidden', 'false');
      stockSearchForm.classList.add('active');
      searchResultContainer.innerHTML = searchResHtml || '';
      document.body.scrollTop = 0;
    });
  });
};

export default () => {
  setup();
  init();
};
