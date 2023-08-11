import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  //console.log(`012 | Variation: ${shared.VARIATION} | ${label}`);
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CG HP Hero Carousel 016', {
      event_category: 'Mobile Only Test',
      event_label: `016 | Variant: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
