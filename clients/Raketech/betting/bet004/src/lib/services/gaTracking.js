import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    const { VARIATION } = shared;

    window.gtag('event', 'Experiment Grayed Toplist 5758528416', {
      event_category: 'All Device Test',
      event_label: `5758528416 | V ${VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
