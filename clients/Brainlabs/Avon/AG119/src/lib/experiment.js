import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { searchComponent, overlay } from './components/searchComponent';
import {
  overlayWithSearch,
  excludeOverlayWithSearch,
  overlayOpen,
  overlayClose
} from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //overlay component add
  if (document.querySelector(`.${ID}__overlay`)) {
    document.querySelector(`.${ID}__overlay`).remove();
  }

  if (document.querySelector(`.${ID}__container`)) {
    [...document.querySelectorAll(`.${ID}__container`)].forEach((item) => {
      item.remove();
    });
  }

  //overlay add
  document.body.insertAdjacentHTML('beforeend', overlay(ID));
  document.querySelector('header').insertAdjacentHTML('beforebegin', overlay(ID));

  //content add mobile
  document
    .querySelector('#LogoBar ~ #SearchBar #SearchInput form')
    ?.insertAdjacentHTML('beforeend', searchComponent(ID));

  //content add desktop
  document
    .querySelector('body #LogoSearchBagBar #SearchInput form')
    ?.insertAdjacentHTML('beforeend', searchComponent(ID));

  const searchInputMobile = document.querySelector('#LogoBar ~ #SearchBar #SearchInput input');
  const searchInputDesktop = document.querySelector('body #LogoSearchBagBar #SearchInput input');

  if (searchInputMobile) searchInputMobile.placeholder = 'Search product name or ID';
  if (searchInputDesktop) searchInputDesktop.placeholder = 'Search product name or ID';

  const overlayComOne = document.querySelector(`#HeaderPlaceholder .${ID}__overlay`);
  const overlayComTwo = document.querySelector(`#HeaderPlaceholder ~ .${ID}__overlay`);

  searchInputMobile &&
    searchInputMobile.addEventListener('focus', (event) => {
      overlayOpen(overlayComOne, overlayComTwo);
      if (!event.target.value) {
        overlayWithSearch(`#LogoBar ~ #SearchBar #SearchInput .${ID}__container`);
      }
    });

  searchInputDesktop &&
    searchInputDesktop.addEventListener('focus', (event) => {
      overlayOpen(overlayComOne, overlayComTwo);
      document
        .querySelector('body #LogoSearchBagBar #SearchBar')
        .classList.add(`${ID}__widthChange`);
      if (!event.target.value) {
        overlayWithSearch(`body #LogoSearchBagBar #SearchInput .${ID}__container`);
      }
    });

  //mobile
  searchInputMobile &&
    searchInputMobile.addEventListener('input', (event) => {
      if (event.target.value) {
        document.querySelector(
          `#LogoBar ~ #SearchBar #SearchInput .${ID}__container`
        ).style.display = 'none';
      } else {
        document.querySelector(
          `#LogoBar ~ #SearchBar #SearchInput .${ID}__container`
        ).style.display = 'block';
      }
    });

  //desktop
  searchInputDesktop &&
    searchInputDesktop.addEventListener('input', (event) => {
      if (event.target.value) {
        document.querySelector(
          `body #LogoSearchBagBar #SearchInput .${ID}__container`
        ).style.display = 'none';
      } else {
        document.querySelector(
          `body #LogoSearchBagBar #SearchInput .${ID}__container`
        ).style.display = 'block';
      }
    });

  document.body.addEventListener('click', (event) => {
    if (event.target === overlayComOne || event.target === overlayComTwo) {
      overlayClose(overlayComOne, overlayComTwo);
      excludeOverlayWithSearch(ID);
    }
  });
};

export default () => {
  setup();
  init();
};
