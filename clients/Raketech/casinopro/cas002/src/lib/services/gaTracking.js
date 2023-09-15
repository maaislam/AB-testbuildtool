import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label, variantType) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CEO History Casinos 029', {
      event_category: 'All Devices',
      event_label: `029 | Variation: ${shared.VARIATION} ${variantType || ''} | ${label}`
    });
  });
};

export default gaTracking;
