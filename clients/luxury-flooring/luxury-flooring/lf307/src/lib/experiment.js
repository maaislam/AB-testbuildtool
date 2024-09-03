import card from './components/card';
import { data } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  // const quickLinkTitles = [];
  // const roomSuitabilityFilters = document.querySelectorAll('.modal-filter [data-bind="scope: \'room_suitabilityFilter\'"] .item');
  // roomSuitabilityFilters.forEach((roomSuitabilityFilter) => {
  //   const title = roomSuitabilityFilter.querySelector('label > span').textContent;
  //   const url = roomSuitabilityFilter.querySelector('a').href;
  //   quickLinkTitles.push({
  //     title,
  //     url
  //   });
  // });

  // console.log('Quick link titles:', quickLinkTitles);

  const attachPoint = document.querySelector('.filter-toolbar');
  if (document.querySelector(`.${ID}__quickLinks`)) return;
  const quickLinks = () => `<div class="${ID}__quickLinks">${data.map((item) => card(ID, item)).join('')}</div>`;
  attachPoint.insertAdjacentHTML('beforebegin', quickLinks());
};

export default () => {
  setup();
  init();
};
