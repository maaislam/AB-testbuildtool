import shared from './shared/shared';
import { navItemUrlSelector } from './helpers/navItemUrlSelector';

const { ID } = shared;

export default () => {
  const navMenuUrls = document.querySelectorAll(navItemUrlSelector);
  navMenuUrls?.forEach((navItemUrl) => {
    const itemUrl = window.innerWidth > 767 ? navItemUrl.querySelector('span > span')?.innerText : navItemUrl.querySelector('span')?.innerText;
    if (itemUrl.toLowerCase() === 'view all') {
      navItemUrl.parentElement.classList.add(`${ID}__remove`);
    }
  });
};
