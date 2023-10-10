import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import { searchTermSuggestions } from './helpers/data/data';

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
          ${Object.keys(searchTermSuggestions)?.map((category) => {
            const searchTermClassName = category.replace(' ', '');
            return `
              <div class="${ID}__${searchTermClassName}">
                <span class="${ID}__${searchTermClassName}-Title">${category}</span>
                <div class="${ID}__${searchTermClassName}-Urls">
                  ${searchTermSuggestions[category]?.map((item) => {
                    return `<a href="${item.url}" class="${ID}__${item.searchCategory}Link">${item.name}</a>`;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
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
    const searchLoader = document.querySelector(
      '[data-test-id="header-search-button"] div[class^="Search__LookingForProducts"]'
    );
    const searchTermSuggestionWrapper = document.querySelector(
      `.${ID}__searchTermSuggestionWrapper`
    );

    if (searchField && searchOverlay && !searchPopup && !searchTermSuggestionWrapper) {
      searchField.insertAdjacentHTML('afterend', searchTermSuggestionHTML);
    } else if (searchPopup && searchTermSuggestionWrapper) {
      searchTermSuggestionWrapper.remove();
    } else if (!searchOverlay && searchTermSuggestionWrapper) {
      searchTermSuggestionWrapper.remove();
    }
    // else if (searchTermSuggestionWrapper && searchLoader) {
    //   searchTermSuggestionWrapper.remove();
    // }
  };
  const config = {
    attributes: true,
    childList: true,
    characterData: false,
    subtree: false
  };
  observeDOM('[data-test-id="header-search-button"]', searchTermSuggestion, config);
};
