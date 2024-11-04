import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const init = () => {
  const dropdown = document.querySelector('select.jdgm-sort-dropdown');
  dropdown.value = VARIATION === '1' ? 'most-helpful' : 'highest-rating';
  dropdown.dispatchEvent(new Event('change'));
};

export default () => {
  setup();
  init();
};
