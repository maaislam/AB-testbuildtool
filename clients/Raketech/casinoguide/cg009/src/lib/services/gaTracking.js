import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CG Sticky CTA Bonus 020', {
      event_category: 'Mobile Only Test',
      event_label: `020 | Variation: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
