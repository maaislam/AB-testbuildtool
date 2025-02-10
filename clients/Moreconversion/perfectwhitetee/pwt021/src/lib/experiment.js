import setup from './services/setup';
import shared from './shared/shared';
import categoryWrapper from './components/categoryWrapper';
import { parseHTML } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = (topsArray) => {
  const header = document.querySelector('#CollectionSection');
  setup();

  parseHTML(topsArray)
    .then((data) => {
      if (data.length === 0) {
        return;
      }

      if (header && !document.querySelector(`.${ID}__categoryWrapper`)) {
        header.insertAdjacentHTML('afterbegin', categoryWrapper(ID, data));
      }
    })
    .catch((error) => {
      console.error('error', error);
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
    });
};

export default () => {
  //find current category

  //current pathname
  const { pathname } = window.location;

  const menuItemLink =
    document.querySelector(`.site-nav__dropdown-link[href*="${pathname}"]`) ||
    document.querySelector('.site-nav__dropdown-link[href*="/collections/womens-tops"]');

  console.log(menuItemLink, 'menuItemLink');

  const currentCategory = menuItemLink?.closest('#menu-');

  console.log(currentCategory, 'currentCategory');

  const quickLinks = currentCategory?.querySelectorAll('.megamenu__col-title');

  console.log(quickLinks, 'quickLinks');

  const topsArray = [];

  quickLinks?.forEach((item) => {
    const linkTextElem = item.querySelector('.megamenu__link-label');
    const linkText = linkTextElem?.textContent.trim();

    const linkElem = item.querySelector('.site-nav__dropdown-link');
    const link = linkElem?.getAttribute('href');

    topsArray.push({
      name: linkText,
      link
    });
  });

  if (topsArray.length === 0) return;
  init(topsArray); //
};
