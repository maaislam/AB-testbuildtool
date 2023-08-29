import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CEO NG Legal 025', {
      event_category: 'All Device Test',
      event_label: `025 | Variation: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
