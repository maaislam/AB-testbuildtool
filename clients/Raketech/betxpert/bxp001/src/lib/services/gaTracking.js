import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', `HP redesign variation: ${shared.VARIATION} | ${label}`);
  });
};

export default gaTracking;
