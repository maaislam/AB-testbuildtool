import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;
const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', `${VARIATION} | ${label}`);
  });
};

export default gaTracking;
