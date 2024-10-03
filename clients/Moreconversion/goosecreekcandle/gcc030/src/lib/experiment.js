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

  desktopMenu.textContent = 'Candles';
  mobileMenu.textContent = 'Candles';

  //desktop
  if (!document.querySelector(`${ID}__desktopMenu`)) {
    document
      .querySelector('#main-navigation-wrapper > ul > li:nth-child(5)')
      .insertAdjacentHTML('afterend', newMenuDesktop(ID));

    document.querySelector(`.${ID}__desktopMenu`).addEventListener('mouseenter', (e) => {
      const wrapper = e.target.querySelector('.mega-menu--dropdown-wrapper');
      wrapper.classList.add('open');
    });
  }

  //mobile
  if (!document.querySelector(`${ID}__mobileMenu`)) {
    document
      .querySelector('.mobile-menu li:nth-child(5)')
      .insertAdjacentHTML('afterend', newMenuMobile(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', () => {
    pollerLite(
      ['.mobile-menu .mobile-menu-link__has-submenu button + div ul > li:first-child .top-link'],
      () => {
        const mobileMenuChild = document.querySelector(
          '.mobile-menu .mobile-menu-link__has-submenu button + div ul > li:first-child .top-link'
        );
        mobileMenuChild.textContent = 'Candles';
      }
    );
  });

  init();
};
