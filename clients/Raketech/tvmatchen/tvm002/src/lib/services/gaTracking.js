//export default gaTracking;
import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment TVG Event Page Redesign 014', {
      event_label: `014 | Variation: ${shared.VARIATION} | ${label}`,
      event_category: 'Desktop Only Test'
    });
  });
};

export default gaTracking;
