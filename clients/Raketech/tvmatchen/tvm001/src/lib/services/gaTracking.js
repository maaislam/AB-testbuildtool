//export default gaTracking;
import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment HP Events Component 000', {
      event_label: `Variation: ${shared.VARIATION} | ${label}`,
      event_category: 'Mobile Only Test'
    });
  });
};

export default gaTracking;
