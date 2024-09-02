import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const quickLinkTitles = [];
  const roomSuitabilityFilters = document.querySelectorAll('.modal-filter [data-bind="scope: \'room_suitabilityFilter\'"] .item');
  roomSuitabilityFilters.forEach((roomSuitabilityFilter) => {
    const title = roomSuitabilityFilter.querySelector('label > span').textContent;
    quickLinkTitles.push(title);
  });

  console.log('Quick link titles:', quickLinkTitles);
};

export default () => {
  setup();
  init();
};
