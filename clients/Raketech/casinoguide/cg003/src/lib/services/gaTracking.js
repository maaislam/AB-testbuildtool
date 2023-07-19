import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  //console.log(`012 | Variation: ${shared.VARIATION} | ${label}`);
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experiment CG InBanner SpeedyCasino 015', {
      event_category: 'Desktop Only Test',
      event_label: `015 | Variant: ${shared.VARIATION} | ${label} | CTA Clicks to Operator | InBanner`
    });
  });
};

export default gaTracking;
