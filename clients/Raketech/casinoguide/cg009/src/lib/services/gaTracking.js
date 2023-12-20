import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const GA4_PROPERTY_ID = 'G-P2725WEG9G';
  const GA4_INTERNAL_EXPERIMENT_NUM = '020';
  const GA4_INTERNAL_EXPERIMENT_ID = `Experiment CG Sticky CTA Bonus ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'Mobile Only Test';

  pollerLite([() => document.readyState === 'complete'], () => {
    //console.log(label);
    if (window.gtag !== undefined) {
      window.gtag('cro_event', GA4_INTERNAL_EXPERIMENT_ID, {
        event_category: EXPERIMENT_DEVICE_CATEGORY,
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | Variation: ${VARIATION} | ${label}`,
        send_to: GA4_PROPERTY_ID
      });
    } else {
      window.dataLayer.push({
        event: 'cro_event',
        event_detail: GA4_INTERNAL_EXPERIMENT_ID,
        event_category: EXPERIMENT_DEVICE_CATEGORY,
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | Variation: ${VARIATION} | ${label}`,
        send_to: GA4_PROPERTY_ID
      });
    }
  });
};
export default gaTracking;
