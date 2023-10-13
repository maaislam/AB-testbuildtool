import setup from './services/setup';
import shared from './shared/shared';

import { searchTermSuggestions } from './helpers/data/data';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

const searchLoader = () => document.querySelector('[class^="Search__LookingForProducts"]');
const searchPopup = () =>
  document.querySelector('[class^="Search__SearchPopup"]') ||
  document.querySelector('[class^="SearchModal__SuggestedProduct"]');

const isMobile = () => !!document.querySelector('[class^="MobileLayout__PageWrapper"]');

//remove helper
const removeSearchTermSuggestion = () => {
  //console.log('removed', ID);
  const searchTermSuggestionWrapper = document.querySelectorAll(
    `.${ID}__searchTermSuggestionWrapper`
  );

  if (searchTermSuggestionWrapper.length > 0) {
    searchTermSuggestionWrapper.forEach((item) => item.remove());
  }
};
//main renderer
const searchTermSuggestion = () => {
  //console.log(ID);
  const searchTermSuggestionHTML = `
    <div class='${ID}__searchTermSuggestionWrapper'>
      <div class="${ID}__searchTermPopUp">
        <hr class="${ID}__searchTermPopUp-hr"/>
        <div class="${ID}__searchTermPopUp-Content">
        ${Object.keys(searchTermSuggestions)
          ?.map((category) => {
            const searchTermClassName = category.replace(' ', '');
            return `
            <div class="${ID}__${searchTermClassName}">
              <span class="${ID}__${searchTermClassName}-Title">${category}</span>
              <div class="${ID}__${searchTermClassName}-Urls">
                ${searchTermSuggestions[category]
                  ?.map((item) => {
                    return `<a href="${item.url}" class="${ID}__${item.searchCategory}Link">${item.name}</a>`;
                  })
                  .join('')}
              </div>
            </div>
          `;
          })
          .join('')}
        </div>
      </div>
    </div>
  `;
  const anchorPoint =
    document.querySelector('[class^="Search__SearchForm"]') ||
    document.querySelector('[data-test-id="result-list"]');
  removeSearchTermSuggestion();
  const attachType = isMobile() ? 'afterbegin' : 'afterend';
  anchorPoint.insertAdjacentHTML(attachType, searchTermSuggestionHTML);
};

const attachSearchListeners = () => {
  const searchInput =
    document.querySelector('[name="search-input"]') || document.querySelector('[type="search"]');
  if (!searchInput) return;
  searchInput.addEventListener('focus', () => {
    const searchTermSuggestionWrapper = document.querySelector(
      `.${ID}__searchTermSuggestionWrapper`
    );

    if (searchLoader() || searchPopup() || searchTermSuggestionWrapper) return;
    console.log('Conditions Met');
    console.log('User interacts with search');
    searchTermSuggestion();
  });
  let timer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const userInput = e.target.value;

      if (userInput.length < 3 && !searchLoader() && !searchPopup()) {
        searchTermSuggestion();
        return;
      }

      removeSearchTermSuggestion();
    }, 500);
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const searchTermSuggestionWrapper = document.querySelector(
      '[data-test-id="header-search-button"]'
    );
    const headerTopbar = document.querySelector('[data-test-id="header-top-bar"]');

    const inputWrapper = isMobile() ? headerTopbar : searchTermSuggestionWrapper;

    if (
      searchTermSuggestionWrapper &&
      !searchTermSuggestionWrapper.contains(target) &&
      !isMobile()
    ) {
      removeSearchTermSuggestion();
      console.log('User exits search experience (users overlay to close)');
    } else if (target.closest('[data-test-id^="icon"]') && inputWrapper.contains(target)) {
      searchTermSuggestion();
    } else if (
      (target.closest('[data-test-id="header-search-button"]') && isMobile()) ||
      (target.closest('[data-test-id^="icon"]') && inputWrapper.contains(target))
    ) {
      pollerLite(['input[type="search"]'], () => {
        searchTermSuggestion();
        attachSearchListeners();
      });
    }
  });

  attachSearchListeners();
};
