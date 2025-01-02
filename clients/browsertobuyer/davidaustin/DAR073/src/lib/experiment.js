import setup from './services/setup';
import shared from './shared/shared';
import desktopMenuWrapper from './components/desktopMenuWrapper';
import menuData from './data/data';
import mobileMenuWrapper from './components/mobileMenuWrapper';
import setGiftMegaMenu from './helpers/setGiftMegaMenu';

const { ID, VARIATION } = shared;
const categoryLabelName = 'DAR 073';
const actionLabelName = 'Menu Click';

const init = () => {
  let navTitle = '';
  const desktopTargetElement = document.querySelector('#mega-menu-shop > div');

  if (!document.querySelector(`.${ID}__desktopMenuWrapper`)) {
    navTitle = 'Roses';
    desktopTargetElement.insertAdjacentHTML('afterbegin', desktopMenuWrapper(ID, menuData[navTitle], `#${ID}__desktopMenuWrapper-${navTitle}`));
  }

  //text change for desktop menu
  const firstItemOfDesktop = document.querySelector('label[for="mega-menu-shop-toggle"]');
  if (firstItemOfDesktop) firstItemOfDesktop.innerText = 'Roses';

  //for mobile devices
  const mobileTargetElement = document.querySelector(
    'label[for="mobile-menu-shop-toggle"]'
  ).parentElement;

  //remove mobile menu wrapper if already exists for SPA behavior
  if (document.querySelector(`.${ID}__mobileMenuWrapper`)) document.querySelector(`.${ID}__mobileMenuWrapper`).remove();

  if (!document.querySelector(`.${ID}__mobileMenuWrapper`)) {
    navTitle = 'Roses';
    const newClasses = `${ID}__mobileMenuWrapper-${navTitle}`;
    mobileTargetElement.insertAdjacentHTML('beforebegin', mobileMenuWrapper(ID, menuData[navTitle], newClasses));
  }

  setGiftMegaMenu(ID);
};

export default () => {
  setup();

  const trackGAEvent = (categoryLabel, actionLabel, eventLabel) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: categoryLabel,
        eventAction: actionLabel,
        eventLabel
      });
    }
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.sub__close')) {
      e.preventDefault();
      const parentSubMenu = e.target.closest('.nav__sub');
      if (parentSubMenu) {
        parentSubMenu.classList.remove('is-active');
      }
    } else if (
      target.closest('.nav__link') &&
      !target.closest('sub__close') &&
      target.nextElementSibling
    ) {
      e.preventDefault();
      const subMenu = target.nextElementSibling;
      if (subMenu && subMenu.classList.contains('nav__sub')) {
        subMenu.classList.add('is-active');
      }
    } else if (target.closest('.nav__link')) {
      const clickedItem = e.target.closest('.nav__link');
      const navSubWrapper = clickedItem.closest('.nav__sub');
      const { parent } = navSubWrapper.dataset;
      const text = clickedItem.textContent.trim();
      trackGAEvent(categoryLabelName, actionLabelName, `${parent} - ${text}`);
    } else if (target.closest('#mega-menu-shop li a:not(.text-links)')) {
      const clickedItem = target.closest('#mega-menu-shop li a');
      const wrapper = clickedItem.closest('ul');
      const categoryElement = wrapper.querySelector('li');
      const category = categoryElement.textContent.trim();
      const text = clickedItem.textContent.trim();
      trackGAEvent(categoryLabelName, actionLabelName, `${category} - ${text}`);
    } else if (
      target.closest('#mobile-menu-shop-shop-roses li.px-offset a') ||
      target.closest('#mobile-menu-shop-rose-garden-accessories li.px-offset a') ||
      target.closest('#mobile-menu-shop-gifts-homeware li.px-offset a') ||
      target.closest('#mobile-menu-shop-workshops li.px-offset a')
    ) {
      const clickedItem =
        target.closest('#mobile-menu-shop-shop-roses li.px-offset a') ||
        target.closest('#mobile-menu-shop-rose-garden-accessories li.px-offset a') ||
        target.closest('#mobile-menu-shop-gifts-homeware li.px-offset a') ||
        target.closest('#mobile-menu-shop-workshops li.px-offset a');
      const wrapper = clickedItem.closest('ul');
      const categoryElement = wrapper.querySelector('li');
      const category = categoryElement.textContent.trim();
      const text = clickedItem.textContent.trim();
      trackGAEvent(categoryLabelName, actionLabelName, `${category} - ${text}`);
    }
  });

  if (VARIATION === 'control') return;

  init();
};
