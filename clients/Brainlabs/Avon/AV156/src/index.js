import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => typeof window.DY.deviceInfo === 'object'], () => {
  setTimeout(activate, 2000);
});
