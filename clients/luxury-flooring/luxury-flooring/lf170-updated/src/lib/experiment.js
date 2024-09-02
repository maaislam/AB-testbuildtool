import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';
import fakeSearchBar from './components/fakeSearchBar';
import { widget } from './components/widget';
import { uspsData } from './data/data';
import { parseHTML, pollerLite, observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const collectAllLinks = (element) => {
  const links = Array.from(element).map((item) => item.getAttribute('href'));
  parseHTML(links);
};

const init = () => {
  const header = document.querySelector('header > .header');
  const searchElement = header.querySelector('.header-usps-search');

  //insert usps list into search element
  if (document.querySelector(`.${ID}__widgetContainer`)) {
    document.querySelector(`.${ID}__widgetContainer`).remove();
  }

  searchElement.insertAdjacentHTML('beforeend', widget(ID, uspsData));

  if (!document.querySelector(`.${ID}__modal`)) {
    document.querySelector('.page-wrapper').insertAdjacentHTML('beforebegin', modal(ID));
  }

  if (!document.querySelector(`.${ID}__fakeSearchBar`)) {
    document
      .querySelector('.header-usps-search > .block.block-search')
      .insertAdjacentHTML('afterend', fakeSearchBar(ID));
  }

  if (!document.querySelector(`.${ID}__modal .header-usps-search .block.block-search`)) {
    document
      .querySelector(`.${ID}__modal .header-usps-search`)
      .insertAdjacentElement(
        'beforeend',
        document.querySelector(
          `.header-usps-search > .block.block-search:not(.${ID}__fakeSearchBar)`
        )
      );
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return; //
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (
      target.closest(`.${ID}__fakeSearchBar .block-content #minisearch-form-top-search`) &&
      target.closest(`.${ID}__fakeSearchBar .control`)
    ) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      const input = document.querySelector(`.${ID}__modal input`);
      input.value = '';
      input.focus();
    } else if (target.closest('.custom_cross_btn') || target.closest('.custom_cross_wrapper')) {
      document.querySelector(`.${ID}__modal`).classList.add('hide_content');
      const searchResultWrapper = document.querySelector(
        `.${ID}__modal #minisearch-autocomplete-top-search`
      );
      searchResultWrapper?.classList.remove(`${ID}__searchResultWrapper`);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (
      target.closest(`.${ID}__fakeSearchBar .block.block-title`) &&
      target.closest(`.${ID}__fakeSearchBar`)
    ) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      setTimeout(() => {
        document.querySelector(`.${ID}__modal .block.block-content`).removeAttribute('style');
        const input = document.querySelector(`.${ID}__modal input`);
        input.value = '';
        input.focus();
      }, 100);
    } else if (
      target.closest('label[data-role="minisearch-label"]') &&
      target.closest(`.${ID}__modal`)
    ) {
      setTimeout(() => {
        document
          .querySelector('#minisearch-form-top-search button[type="submit"]:not([disabled])')
          ?.click();
      }, 100);
    } else if (target.closest(`.${ID}__roomVisualizer`)) {
      window.roomvo.startStandaloneVisualizer();
    }
  });

  init();

  const searchInput = document.querySelector(`.${ID}__modal input`);

  searchInput.addEventListener('input', (e) => {
    if (!e.target.value) {
      const searchResultWrapper = document.querySelector(
        `.${ID}__modal #minisearch-autocomplete-top-search`
      );
      searchResultWrapper?.classList.remove(`${ID}__searchResultWrapper`);
    }
  });

  const searchResultHandler = (mutation) => {
    const { addedNodes, removedNodes } = mutation;
    if (addedNodes.length) {
      const searchResultWrapper = document.querySelector(
        `.${ID}__modal #minisearch-autocomplete-top-search`
      );

      if (!addedNodes[0]?.childNodes.length) {
        searchResultWrapper?.classList.remove(`${ID}__searchResultWrapper`);
      } else if (addedNodes[0]?.childNodes.length) {
        searchResultWrapper?.classList.add(`${ID}__searchResultWrapper`);
        pollerLite(
          [
            () =>
              searchResultWrapper?.querySelector('.title-product') &&
              searchResultWrapper?.querySelectorAll('.title-product ~ dd').length
          ],
          () => {
            setTimeout(() => {
              const allProductLinks = searchResultWrapper?.querySelectorAll('.title-product ~ dd');
              collectAllLinks(allProductLinks);
            }, 500);
          }
        );
      }
    } else if (removedNodes.length) {
      document.querySelectorAll('.new-image-wrapper').forEach((item) => {
        item.classList.remove('new-image');
      });
      document.querySelectorAll('.new-image-element').forEach((item) => {
        item.remove();
      });
    }
  };

  observeDOM(`.${ID}__modal #minisearch-autocomplete-top-search`, searchResultHandler);
};
