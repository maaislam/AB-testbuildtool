import addViewAll from './helpers/addViewAll';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const anchorPointSelectors = ['#navigation', '#desktop-navigation'];

  const htmlStr = `
  <li class="sub-level-item ${ID}__viewAll">
    <a class="has-sub-menu-level-2 ${ID}__viewAllUrl" href="https://www.hotelchocolat.com/uk/shop/christmas/">View All</a>
  </li>
  `;

  addViewAll(anchorPointSelectors, htmlStr, ID);
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest(`#navigation .${ID}__viewAllUrl`) ||
      target.closest(`#desktop-navigation .${ID}__viewAllUrl`)
    ) {
      sessionStorage.setItem('isViewAllClicked', 'true');
    }
  });

  const desktopViewAll = document.querySelector(`#desktop-navigation .${ID}__viewAll`);
  desktopViewAll.addEventListener('mouseover', () => {
    desktopViewAll.classList.add('hover');
  });
  desktopViewAll.addEventListener('mouseout', () => {
    desktopViewAll.classList.remove('hover');
  });
};
