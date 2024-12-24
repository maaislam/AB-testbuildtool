import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import desktopMenuWrapper from './components/desktopMenuWrapper';
import menuData from './data/data';
import mobileMenuWrapper from './components/mobileMenuWrapper';

const { ID, VARIATION } = shared;

const mobileMenuFunctionality = () => {
  //JavaScript for handling menu navigation
  const nav = document.querySelector('.nav');
  //const links = document.querySelectorAll('.nav__link');
  //const subMenus = document.querySelectorAll('.nav__sub');

  //Prepend back button to sub menu(s)
  //subMenus.forEach((subMenu) => {
  //const backButton = document.createElement('li');
  //backButton.classList.add('nav__item');
  //backButton.innerHTML =
  //'<a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a>';
  //subMenu.insertBefore(backButton, subMenu.firstChild);
  //});

  //Close out sub menu
  nav.addEventListener('click', (e) => {});

  //Trigger sub menu
  nav.addEventListener('click', (e) => {});
};

const init = () => {
  const desktopTargetElement = document.querySelector('#mega-menu-shop > div');
  console.log(desktopTargetElement, 'desktopTargetElement');

  if (!document.querySelector(`.${ID}__desktopMenuWrapper`)) {
    desktopTargetElement.insertAdjacentHTML('afterbegin', desktopMenuWrapper(ID, menuData));
  }

  //text change for desktop menu
  const firstItemOfDesktop = document.querySelector('label[for="mega-menu-shop-toggle"]');
  if (firstItemOfDesktop) firstItemOfDesktop.innerText = 'Roses';

  //for mobile devices
  const mobileTargetElement = document.querySelector(
    'label[for="mobile-menu-shop-toggle"]'
  ).parentElement;
  if (!document.querySelector(`.${ID}__mobileMenuWrapper`)) {
    mobileTargetElement.insertAdjacentHTML('beforebegin', mobileMenuWrapper(ID, menuData));
  }

  mobileMenuFunctionality();
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  const trackGAEvent = (c, a, l) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: c,
        eventAction: a,
        eventLabel: l
      });
      console.log('event tracked', c, a, l);
    }
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (e.target.closest('.sub__close')) {
      e.preventDefault();
      const parentSubMenu = e.target.closest('.nav__sub');
      if (parentSubMenu) {
        parentSubMenu.classList.remove('is-active');
      }
    } else if (
      e.target.closest('.nav__link') &&
      !e.target.closest('sub__close') &&
      e.target.nextElementSibling
    ) {
      e.preventDefault();
      const subMenu = e.target.nextElementSibling;
      if (subMenu && subMenu.classList.contains('nav__sub')) {
        subMenu.classList.add('is-active');
      }
    } else if (e.target.closest('.nav__link')) {
      const clickedItem = e.target.closest('.nav__link');
      const navSubWrapper = clickedItem.closest('.nav__sub');
      const { parent } = navSubWrapper.dataset;
      const text = clickedItem.textContent.trim();
      trackGAEvent('DAR 073', 'Menu Click', `${parent} - ${text}`);
    }
  });
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //use if needed
};
