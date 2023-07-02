import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CG InBanner SpeedyCasino 007', {
      event_category: 'Desktop Only Test',
      event_label: `007 | Variation: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
