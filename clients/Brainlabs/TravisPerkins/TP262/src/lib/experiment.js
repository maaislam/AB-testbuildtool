import shared from './shared/shared';
import { data } from './helpers/data/data';
import { observeDOM } from './helpers/utils';
import { navItemUrlSelector } from './helpers/navItemUrlSelector';

const { ID, VARIATION } = shared;

const init = () => {
  const navMenuUrls = document.querySelectorAll(navItemUrlSelector);
  navMenuUrls?.forEach((navItemUrl) => {
    const itemUrl = navItemUrl?.getAttribute('href').trim();
    const matchingObj = data[itemUrl];
    if (matchingObj?.orangeLabel === true && VARIATION === '1') {
      navItemUrl.classList.contains(`${ID}__remove`) && navItemUrl.classList.remove(`${ID}__remove`);
    } else {
      matchingObj && navItemUrl.parentElement.classList.add(`${ID}__remove`);
    }
  });
};

export default () => {
  init();
  observeDOM('body', init);
};
