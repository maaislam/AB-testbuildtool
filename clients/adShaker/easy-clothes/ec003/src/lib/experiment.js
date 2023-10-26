import sendTga4 from './services/gaTracking';
import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

export default () => {
  setup();
  setTimeout(() => {
    sendTga4(`User in experiment hide-widget variation: ${VARIATION}`);
  }, 2000);
};
