import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import searchContainer from './components/searchContainer';

const { ID, VARIATION } = shared;

const toggleSearch = () => {
  const searchContainerElem = document.querySelector(`.${ID}__search-container`);
  const searchInput = document.querySelector(`.${ID}__searchInput`);

  searchContainerElem.classList.toggle('active');

  if (searchContainerElem.classList.contains('active')) {
    setTimeout(() => searchInput.focus(), 300);
  }
};

const init = () => {
  const targetPoint = document.querySelector('nav > div:last-child');
  if (!document.querySelector(`.${ID}__search-container`)) {
    targetPoint.insertAdjacentHTML('beforebegin', searchContainer(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__search-icon-static`)) {
      toggleSearch();
    } else if (target.closest(`.${ID}__overlay`) || target.closest(`.${ID}__close-icon`)) {
      const searchContainerElem = document.querySelector(`.${ID}__search-container`);
      searchContainerElem.classList.remove('active');
    }
  });

  init();

  onUrlChange(() => {
    pollerLite(['nav > div:last-child'], () => {
      const searchContainerElem = document.querySelector(`.${ID}__search-container`);
      if (!searchContainerElem) {
        init();
      }
    });
  });
};
