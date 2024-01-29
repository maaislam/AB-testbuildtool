import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, setCasinoData } from './helpers/utils';
import initMobileSwiper from './helpers/initMobileSwiper';
import toplistItems from './components/toplistItems';

const { ID, VARIATION } = shared;

const init = () => {
  const toplistSection = document.querySelector('.toplist.casino');

  const casinoData = window[`${ID}__data`];
  if (!casinoData) return;

  const allCasinos = document.querySelectorAll('.toplist.casino .toplist-item');
  const firstThreeCasinos = [...allCasinos].slice(0, 3);

  const htmlStr = `<div class='${ID}__toplistContainer swiper'>
    ${toplistItems(ID, firstThreeCasinos)}
  </div>`;
  toplistSection.insertAdjacentHTML('afterbegin', htmlStr);
};

export default () => {
  setup();
  setCasinoData(ID);

  init();
  initMobileSwiper('.swiper');
};
