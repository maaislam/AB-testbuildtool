import showVariation from './showVariation';
import { pollerLite } from '../../../../../../../globalUtil/util';

const clickHandler = (ID) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (
      !e.target.closest('#siteHeader .p-header-spacer .p-header-actions-item--only-responsive') &&
      !e.target.closest(`.${ID}__searchStructure`) &&
      e.target !== document.querySelector('#siteHeader .p-header-spacer input.searchInput') &&
      !e.target.closest('#mobileSearch') &&
      !e.target.closest(
        '#siteHeader .p-header-spacer button[class="p-header-search-close js-cmp-search-bar-reset"]'
      ) &&
      e.targrt !==
        document.querySelector(
          '#siteHeader .p-header-spacer button[class="p-header-search-close js-cmp-search-bar-reset"]'
        )
    ) {
      document.querySelector(`.${ID}__searchStructure`).classList.remove(`${ID}__show`);
    }
    if (e.target.closest('#siteHeader .p-header-spacer input.searchInput')) {
      showVariation(ID);
    }
    if (
      e.target.closest(
        '#siteHeader .p-header-spacer button[class="p-header-search-close js-cmp-search-bar-reset"]'
      )
    ) {
      document.querySelector(`.${ID}__searchStructure`).classList.add(`${ID}__show`);
    }
    if (
      e.target.closest(
        '#siteHeader #mobileSearch button[class="p-header-search-close js-cmp-search-bar-reset"]'
      )
    ) {
      document.querySelector(`.${ID}__searchStructureMobile`).classList.add(`${ID}__show`);
    }
    if (e.target.closest('#siteHeader .p-header-spacer .p-header-actions-item--only-responsive')) {
      pollerLite(
        [
          '#siteHeader #mobileSearch .js-cmp-search-bar-mobile-toggle.p-header-actions-item--active'
        ],
        () => {
          document.querySelector(`.${ID}__searchStructureMobile`).classList.add(`${ID}__show`);
        }
      );
      pollerLite(
        [
          '#siteHeader #mobileSearch .js-cmp-search-bar-mobile-toggle:not(.p-header-actions-item--active)'
        ],
        () => {
          document.querySelector(`.${ID}__searchStructureMobile`).classList.remove(`${ID}__show`);
        }
      );
    }
  });
};

export default clickHandler;
