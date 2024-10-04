import setup from './services/setup';
import shared from './shared/shared';
import { buttonWrapper } from './components/buttonWrapper';

const { ID, VARIATION } = shared;
const init = () => {
  //desktop
  const desktopBanner = document.querySelectorAll('.shogun-image-container')[0];
  desktopBanner.classList.add('desktop-banner');
  if (!document.querySelector(`.esktop-banner .${ID}__buttonWrapper`)) {
    desktopBanner.insertAdjacentHTML('beforeend', buttonWrapper(ID));
    document.querySelector('.desktop-banner img').src =
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/hero-desktop.png?v=1727966510';
  }

  //mobile
  const mobileBanner = document.querySelectorAll('.shogun-image-container')[2];
  mobileBanner.classList.add('mobile-banner');
  if (!document.querySelector(`.mobile-banner .${ID}__buttonWrapper`)) {
    mobileBanner.insertAdjacentHTML('beforeend', buttonWrapper(ID));
    document.querySelector('.mobile-banner img').src =
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/hero-mobile.png?v=1727966509';
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest('.shogun-image-container.desktop-banner .shogun-image-link') ||
      target.closest('.shogun-image-container.mobile-banner .shogun-image-link')
    ) {
      e.preventDefault();
    }
  });

  init();
};
