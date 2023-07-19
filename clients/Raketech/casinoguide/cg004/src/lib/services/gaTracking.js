import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  //console.log(`012 | Variation: ${shared.VARIATION} | ${label}`);
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CG Reviews Carousel 013', {
      event_category: 'Desktop Only Test',
      event_label: `013 | Variant: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
