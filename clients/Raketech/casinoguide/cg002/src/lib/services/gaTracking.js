import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment HP CTA Top Banner 012', {
      event_category: 'Desktop Only Test',
      event_label: `012 | Variation: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
