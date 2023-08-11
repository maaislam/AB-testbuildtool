//import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  //console.log(`012 | Variation: ${shared.VARIATION} | ${label}`);

  window.gtag('event', 'Experiment CG Casino Preview 024', {
    event_category: 'Desktop Only Test',
    event_label: `024 | Variant: ${shared.VARIATION} | ${label}`
  });
};

export default gaTracking;
