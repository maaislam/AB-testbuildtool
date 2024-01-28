import setup from './services/setup';
import shared from './shared/shared';
import toplistItem from './components/toplistItem';
import { setCasinoData } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const toplistSection = document.querySelector('.toplist.casino');

  const casinoData = window[`${ID}__data`];
  if (!casinoData) return;

  const allCasinos = document.querySelectorAll('.toplist.casino .toplist-item');
  const firstThreeCasinos = [...allCasinos].slice(0, 3);

  const htmlStr = `<div class='${ID}__toplistContainer'>
    ${firstThreeCasinos.map((casino, index) => toplistItem(ID, casino, index)).join('')}
  </div>`;
  toplistSection.insertAdjacentHTML('afterbegin', htmlStr);
};

export default () => {
  setup();
  setCasinoData(ID);

  init();
};
