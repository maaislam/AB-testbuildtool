import setup from './services/setup';

import shared from './shared/shared';
import getSearchResult from './helpers/getSearchResult';

const { ID } = shared;

const closeElem = `<span class="${ID}__close icon-button__icon ${ID}__hide">
<span class="icon icon-new icon-header-menu-close ">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.462 6.479 5.538 19.402M5.538 6.479l12.924 12.923" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="6.667" stroke-linejoin="round"></path></svg>
  </span>
</span>`;
const newSearchBar = `<div class="${ID}__search-wrapper">
<input type="text" id="searchInput" placeholder="Search for Empress, Vibrator, Lube..">
  ${closeElem}
</div>
`;

const init = () => {
  const isMobile = window.innerWidth < 960;
  const searchBarSelector = isMobile
    ? '.header__row-mobile .header__icon-touch--search'
    : '.header__row-segment-desktop .header__icon-touch--search';
  const searchBar = document.querySelector(`${searchBarSelector}`);

  searchBar.classList.add(`${ID}__searchBar`);

  if (!isMobile) {
    const htmlStr = `<span class='${ID}__placeHolder'>Search for Empress, Vibrator, Lube..</span>`;
    searchBar.insertAdjacentHTML('afterbegin', htmlStr);
    return;
  }

  searchBar.insertAdjacentHTML('beforebegin', newSearchBar);
  searchBar.style.display = 'none';

  document.querySelector(`.${ID}__search-wrapper`).addEventListener('input', (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      const overlay = document.querySelector('.quick-search__overlay');
      overlay.click();
      const closeIcon = document.querySelector(`.${ID}__close`);
      closeIcon.classList.add(`${ID}__hide`);
      return;
    }

    const closeIcon = document.querySelector(`.${ID}__close`);
    closeIcon.classList.remove(`${ID}__hide`);
    getSearchResult(value).then((searchResHtml) => {
      const mainSearch = document.querySelector('#MainQuickSearch');
      const stockSearchForm = document.querySelector('.quick-search__form');
      const searchResultContainer = document.querySelector('.quick-search__results');

      mainSearch.classList.add('active');
      mainSearch.classList.add('quick-search--visible');
      mainSearch.setAttribute('aria-hidden', 'false');
      stockSearchForm.classList.add('active');
      searchResultContainer.innerHTML = searchResHtml || '';
      stockSearchForm.scrollTop = 0;
    });
  });
};

export default () => {
  setup();
  init();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //close search bar
    if (target.closest(`.${ID}__close`)) {
      const mainSearch = document.querySelector('#MainQuickSearch');
      const stockSearchForm = document.querySelector('.quick-search__form');
      const searchResultContainer = document.querySelector('.quick-search__results');
      const newSearchinput = document.querySelector(`.${ID}__search-wrapper input`);
      const closeIcon = document.querySelector(`.${ID}__close`);
      closeIcon.classList.add(`${ID}__hide`);
      mainSearch.classList.remove('active');
      mainSearch.classList.remove('quick-search--visible');
      mainSearch.setAttribute('aria-hidden', 'true');
      stockSearchForm.classList.remove('active');
      searchResultContainer.innerHTML = '';
      newSearchinput.value = '';
    }
  });
};
