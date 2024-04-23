import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

export default () => {
  setup();

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;
};
