import { pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';

pollerLite(['body'], () => {
  setup();
});
