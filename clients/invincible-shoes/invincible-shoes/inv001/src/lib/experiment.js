import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import searchForm from './components/searchForm';
import getSearchData from './helpers/getSearchData';
import searchResult from './components/searchResult';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    //close when clicked outside
    if (!target.closest(`.${ID}__search-form`)) {
      const resultDiv = document.querySelector(`.${ID}__search-form .predictive-search-wrapper`);
      if (resultDiv && resultDiv.classList.contains('predictive-search-wrapper--visible')) {
        e.preventDefault();
        resultDiv.classList.remove('predictive-search-wrapper--visible');
        const locationSelector = document.getElementById('transcySwitcherContainer');
        if (locationSelector) {
          locationSelector.style.display = 'block';
        }
      }
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (document.querySelector(`.${ID}__search-form`)) return;
  const siteHeaderIcons = document.querySelector('.site-header__icons');
  const isMobile = window.innerWidth < 1024;
  const searchIconDesktop = document.querySelector('.site-header__search-toggle');
  const mobHeader = document.querySelector('.site-header');
  const anchorPoint = isMobile ? mobHeader : searchIconDesktop;
  if (!isMobile) {
    siteHeaderIcons.style.width = '50%';
  }
  searchIconDesktop.classList.add(`${ID}__hide`);
  anchorPoint.insertAdjacentHTML('afterend', searchForm(ID));

  //Event listener for the text input event with debounce
  let timeoutId;
  const INPUT_DELAY = 500;
  const resultContainer = document.querySelector(`.${ID}__predictive-search__list`);
  const searchInput = document.querySelector(`.${ID}__search-form .search-form__input`);
  const searchResWrapper = document.querySelector(`.${ID}__search-form .predictive-search-wrapper`);

  searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    searchResWrapper.classList.add('predictive-search-wrapper--visible');
    const inputText = searchInput.value;
    timeoutId = setTimeout(() => {
      getSearchData(inputText).then((result) => {
        console.log('🚀result:', result);
        const searchResults = result.resources.results.products;
        resultContainer.innerHTML = '';
        const locationSelector = document.getElementById('transcySwitcherContainer');
        if (locationSelector) {
          locationSelector.style.display = 'none';
        }
        searchResults.forEach((product, i) => {
          const searchItemHtml = searchResult(ID, i, product);
          resultContainer.insertAdjacentHTML('beforeend', searchItemHtml);
        });
      });
    }, INPUT_DELAY);
  });
};
