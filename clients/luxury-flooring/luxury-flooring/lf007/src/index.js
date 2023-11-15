import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.fp-calculator'], () => {
  setTimeout(activate, 1000);
});
