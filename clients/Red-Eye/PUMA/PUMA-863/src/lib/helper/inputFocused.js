import { pollerLite } from '../../../../../../../globalUtil/util';

const inputFocused = (ID) => {
  document
    .querySelector('#siteHeader .p-header-spacer input.searchInput')
    .addEventListener('input', (e) => {
      pollerLite(
        ['#siteHeader .p-header-spacer form button.p-header-search-close--visible'],
        () => {
          document.querySelector(`.${ID}__searchStructure`).classList.remove(`${ID}__show`);
        }
      );
      pollerLite(
        ['#siteHeader .p-header-spacer form button:not(.p-header-search-close--visible)'],
        () => {
          document.querySelector(`.${ID}__searchStructure`).classList.add(`${ID}__show`);
        }
      );
    });

  document
    .querySelector('#siteHeader #mobileSearch input.searchInput')
    .addEventListener('input', (e) => {
      pollerLite(['#siteHeader #mobileSearch form button.p-header-search-close--visible'], () => {
        document.querySelector(`.${ID}__searchStructureMobile`).classList.remove(`${ID}__show`);
      });
      pollerLite(
        ['#siteHeader #mobileSearch form button:not(.p-header-search-close--visible)'],
        () => {
          document.querySelector(`.${ID}__searchStructureMobile`).classList.add(`${ID}__show`);
        }
      );
    });
};
export default inputFocused;
