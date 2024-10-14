import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { newMenuDesktop } from './components/newMenuDesktop';
import newMenuMobile from './components/newMenuMobile';

const { ID, VARIATION } = shared;

const init = () => {
  //Add your custom JavaScript code here
  const desktopMenu = document.querySelector(
    '#main-navigation-wrapper ul > li:nth-child(2) > div .nav-label'
  );
  const mobileMenu = document.querySelector('.mobile-menu .mobile-menu-link__has-submenu button');
  mobileMenu.classList.add('custom-candles');

  desktopMenu.textContent = 'Candles';
  mobileMenu.textContent = 'Candles';

  //desktop
  if (!document.querySelector(`${ID}__newDesktopMenu`)) {
    document
      .querySelector('#main-navigation-wrapper > ul > li:nth-child(5)')
      .insertAdjacentHTML('afterend', newMenuDesktop(ID));
  }

  //mobile
  if (!document.querySelector(`${ID}__mobileMenu`)) {
    document
      .querySelector('.mobile-menu li:nth-child(5)')
      .insertAdjacentHTML('afterend', newMenuMobile(ID));
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.custom-candles')) {
      const clickedItem = target.closest('.custom-candles');
      const parent = clickedItem.closest('li');
      pollerLite([() => parent.querySelector('.mobile-menu #mobile-menu')], () => {
        const list = parent.querySelector('.mobile-menu #mobile-menu');
        list.style.opacity = '0';
        const candlesList = list.querySelector('li:nth-child(2) > button');
        candlesList.closest('li').classList.add('has-submenu-candles');
        candlesList.click();
        list.style.opacity = '1';
      });
    } else if (target.closest('.has-submenu-candles #mobile-submenu > li > button')) {
      e.preventDefault();
      const clickedItem = target.closest('.has-submenu-candles #mobile-submenu > li > button');
      const parent = clickedItem.closest('.mobile-menu.mobile-menu-child');
      parent.classList.add('mobile-menu-hidden');
      pollerLite([() => parent.classList.contains('active')], () => {
        parent.classList.remove('active');
      });
    }
  });

  init();
};
