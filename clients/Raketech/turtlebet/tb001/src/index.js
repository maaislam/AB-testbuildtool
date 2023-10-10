import { observeDOM, pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';

pollerLite(['body'], () => {
  observeDOM('body', setup);
});
