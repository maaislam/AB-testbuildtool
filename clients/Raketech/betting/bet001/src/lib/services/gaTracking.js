import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment HP Redesign 001', {
      event_label: `variation: ${shared.VARIATION} | ${label}`,
      event_category: 'Desktop Only Test'
    });
  });
};

export default gaTracking;
