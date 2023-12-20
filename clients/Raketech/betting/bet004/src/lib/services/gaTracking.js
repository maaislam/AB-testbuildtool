import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    const { VARIATION } = shared;

    window.gtag('event', 'Experiment Grayed Toplist 5618135091', {
      event_category: 'All Device Test',
      event_label: `5618135091 | Variation: ${VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
