import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const bestSellerElement = () => {
  const html = `
    <li class="navmenu-item navmenu-basic__item ${ID}__bestSellers lgd:hidden">
      <a class="
          navmenu-link
          navmenu-link-depth-1
          hover:text-underline hover:text-brandPurple
          " href="/collections/best-selling"><span>Bestsellers</span>
      </a>
    </li>
  `;
  return html.trim();
};

const newInElement = () => {
  const html = `
    <li class="navmenu-item navmenu-basic__item ${ID}__newIn lgd:hidden">
      <a class="
          navmenu-link
          navmenu-link-depth-1
          hover:text-underline hover:text-brandPurple
          " href="/collections/living-room-rugs?sort_by=created-descending"><span>New In</span>
      </a>
    </li>
  `;
  return html.trim();
};
const init = () => {
  const siteNavigation = document.querySelector('.site-navigation');
  if (!siteNavigation.querySelector(`.${ID}__bestSellers`)) {
    siteNavigation
      .querySelector('ul > li:nth-child(2)')
      .insertAdjacentHTML('beforebegin', bestSellerElement());
  }
  if (!siteNavigation.querySelector(`.${ID}__newIn`)) {
    siteNavigation
      .querySelector('ul > li:nth-child(2)')
      .insertAdjacentHTML('afterend', newInElement());
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //use if needed
};
