import addViewAll from './helpers/addViewAll';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const mobileAnchorPoint = document.querySelector('#navigation .has-sub-menu[href*="/christmas"] + .content-asset ul.sub-level');
  const desktopAnchorPoint = document.querySelector('#desktop-navigation .has-sub-menu[href*="/christmas"] + .content-asset ul.sub-level');
  const anchorPointSelectors = ['#navigation', '#desktop-navigation'];

  const htmlStr = `
  <li class="sub-level-item ${ID}__viewAll">
    <a class="has-sub-menu-level-2 ${ID}__viewAllUrl" href="https://www.hotelchocolat.com/uk/shop/christmas/">View All</a>
  </li>
  `;
  mobileAnchorPoint.insertAdjacentHTML('afterbegin', htmlStr);
  desktopAnchorPoint.insertAdjacentHTML('afterbegin', htmlStr);
  addViewAll(anchorPointSelectors);

  const mobileViewAll = document.querySelector(`#navigation .${ID}__viewAll`);
  const desktopViewAll = document.querySelector(`#desktop-navigation .${ID}__viewAll`);
  const mobileChristmasNav = document.querySelector(`#navigation .${ID}__viewAll + li`);
  const desktopChristmasNav = document.querySelector(`#desktop-navigation .${ID}__viewAll + li`);

  const isViewAllClicked = sessionStorage.getItem('isViewAllClicked');
  if (window.location.pathname.includes('/shop/christmas/') && isViewAllClicked === 'true') {
    mobileViewAll.classList.add('current');
    desktopViewAll.classList.add('current');
    mobileChristmasNav.classList.remove('current');
    desktopChristmasNav.classList.remove('current');
    sessionStorage.removeItem('isViewAllClicked');
  }

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`#navigation .${ID}__viewAllUrl`) || target.closest(`#desktop-navigation .${ID}__viewAllUrl`)) {
      sessionStorage.setItem('isViewAllClicked', 'true');
    }
  });

  desktopViewAll.addEventListener('mouseover', () => {
    desktopViewAll.classList.add('hover');
  });
  desktopViewAll.addEventListener('mouseout', () => {
    desktopViewAll.classList.remove('hover');
  });
};

export default () => {
  setup();
  init();
  console.log(ID);
};
