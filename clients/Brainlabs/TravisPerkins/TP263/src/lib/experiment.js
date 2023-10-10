import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  const searchTermSuggestion = () => {
    console.log(ID);
    const searchTermSuggestionHTML = `
      <div class='${ID}__searchTermSuggestionWrapper'>
        <div class="${ID}__searchTermPopUp">
          <hr class="${ID}__searchTermPopUp-hr"/>
          <div class="${ID}__searchTermPopUp-Content">
            <div class="${ID}__popularSearches">
              <span class="${ID}__popularSearches-Title">Popular Searches</span>
            </div>
          </div>
        </div>
      </div>
    `;
    const searchField = document.querySelector(
      '[data-test-id="header-search-button"] div[class^="Search__SearchForm"]'
    );
    const searchOverlay = document.querySelector('div[class^="Search__SearchOverlay"]');
    const searchPopup = document.querySelector(
      '[data-test-id="header-search-button"] div[class^="Search__SearchPopup"]'
    );
    const searchTermSuggestionWrapper = document.querySelector(
      `.${ID}__searchTermSuggestionWrapper`
    );

    if (searchField && searchOverlay && !searchPopup && !searchTermSuggestionWrapper) {
      searchField.insertAdjacentHTML('afterend', searchTermSuggestionHTML);
    } else if (searchField && searchOverlay && searchTermSuggestionWrapper) {
      if (searchPopup && searchTermSuggestionWrapper) {
        searchTermSuggestionWrapper.remove();
      }
    } else if (!searchOverlay && searchTermSuggestionWrapper) {
      searchTermSuggestionWrapper.remove();
    }
  };
  const config = {
    attributes: true,
    childList: true,
    characterData: false,
    subtree: false
  };
  observeDOM('[data-test-id="header-search-button"]', searchTermSuggestion, config);
};
