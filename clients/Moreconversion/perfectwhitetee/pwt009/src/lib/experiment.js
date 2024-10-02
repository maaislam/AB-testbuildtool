import setup from './services/setup';
import shared from './shared/shared';
import collectionObj from './data/data';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector(
    '.site-navigation [href="/collections/essentials"] + div.site-nav__dropdown'
  );

  const promoBoxes = targetPoint.querySelectorAll('.megamenu__promo');

  const menu = targetPoint.querySelector('#menu-');

  menu.querySelectorAll('.site-nav__dropdown-link').forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const label = e.target.querySelector('.megamenu__link-label').textContent.trim();
      const isMenu = collectionObj[label];
      if (isMenu) {
        promoBoxes.forEach((promo, index) => {
          promo.querySelector('a').href = isMenu.link;
          promo.querySelector('img').dataset.srcset = isMenu[`imageSrc${index + 1}`];
          promo.querySelector('img').srcset = isMenu[`imageSrc${index + 1}`];
        });
      }
    });
  });
};

export default () => {
  setup();

  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
