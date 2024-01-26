import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const videoHTML = `<video class='${ID}__heroVideo' autoplay><source src="https://cdn.shopify.com/videos/c/o/v/df5f1d4db2a845c19092e87b653e6ffc.mp4" type="video/mp4"></video>`;
  const desktopImg = document.querySelector('.banner img.bnrprd-v2');
  const mobileImg = document.querySelector('.banner img.bnrprd-v2-mob');

  desktopImg.insertAdjacentHTML('afterend', videoHTML);
  mobileImg.insertAdjacentHTML('afterend', videoHTML);
};

export default () => {
  setup();
  init();
};
