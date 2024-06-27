import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.hydrated', '.shipping-protection-description', '.shipping-protection-title'], () => {
  setTimeout(activate, 1500);
});
