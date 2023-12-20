import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const GA4_PROPERTY_ID = 'G-H91NBPERDS';
  const GA4_INTERNAL_EXPERIMENT_NUM = '5618132564';
  const GA4_INTERNAL_EXPERIMENT_ID = `Experiment CEO History Casinos ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  pollerLite([() => document.readyState === 'complete'], () => {
    if (window.gtag !== undefined) {
      window.gtag('event', GA4_INTERNAL_EXPERIMENT_ID, {
        event_category: EXPERIMENT_DEVICE_CATEGORY,
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | Variation: ${VARIATION} | ${label}`,
        send_to: GA4_PROPERTY_ID
      });
    } else {
      window.dataLayer = window.dataLayer || [];
      if (window.customGtag === undefined) {
        window.customGtag = (...args) => {
          window.dataLayer.push(...args);
        };
        window.customGtag('js', new Date());
        window.customGtag('config', GA4_PROPERTY_ID);
      }
      window.customGtag({
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
