import updateMenus from './helpers/updateMenus';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const observeIntersection = (target, threshold, callback, rootMargin = '-150px') => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin,
    threshold
  });
  if (!target) {
    return;
  }

  observer?.observe(target);
};

const init = () => {
  updateMenus();

  if (window.location.pathname === '/') {
    document.body.classList.add(`${ID}__homePage`);
    const header = document.querySelector('.section-header');
    const topBar = document.querySelector('.top-fix-bar');
    topBar.classList.add(`${ID}__topBar`);

    const mainElem = document.querySelector('.banner .banner_text1');

    const isMobile = window.matchMedia('(max-width: 1350px)').matches;
    const rootMargin = isMobile ? '-110px' : '-10px';

    observeIntersection(mainElem, 0.1, (entries) => {
      if (entries[0].isIntersecting) {
        header.classList.remove(`${ID}__fixedNavbar`);
      } else {
        header.classList.add(`${ID}__fixedNavbar`);
      }
    }, rootMargin);
  } else if (window.location.pathname.includes('/tiktok') || window.location.pathname.includes('/go')) {
    document.body.classList.add(`${ID}__shopifyPage`);
    const header = document.querySelector('.section-header');
    const topBar = document.querySelector('.top-fix-bar');
    topBar.classList.add(`${ID}__topBar`);

    const mainElem = document.querySelector('.banner .logo');

    const isMobile = window.matchMedia('(max-width: 1350px)').matches;
    const rootMargin = isMobile ? '-110px' : '-130px';

    observeIntersection(mainElem, 0.1, (entries) => {
      if (entries[0].isIntersecting) {
        header.classList.remove(`${ID}__fixedNavbar`);
      } else {
        header.classList.add(`${ID}__fixedNavbar`);
      }
    }, rootMargin);
  }
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('#HeaderDrawer-redeem-offer')) {
      const buyBoxElem = document.querySelector('.section_12');
      if (buyBoxElem) {
        document.querySelector('.header__icon--menu').click();
        buyBoxElem.scrollIntoView();
      }
    } else if (target.closest('#HeaderDrawer-ingredients')) {
      const ingredientsElem = document.querySelector('.section_11');
      if (ingredientsElem) {
        document.querySelector('.header__icon--menu').click();
        ingredientsElem.scrollIntoView();
      }
    }
  });
};
