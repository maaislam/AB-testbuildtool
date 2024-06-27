import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const variationType = VARIATION === 'Control' ? 'C' : '1';

  const GA4_PROPERTY_ID = 'G-H91NBPERDS';
  const GA4_INTERNAL_EXPERIMENT_NUM = '6879822412';
  const GA4_INTERNAL_EXPERIMENT_ID = `Replace top banner with Casino CTA component on /operator-signup-bonus pages ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'Mobile Only';

  pollerLite([() => document.readyState === 'complete'], () => {
    if (window.gtag !== undefined) {
      window.gtag('event', GA4_INTERNAL_EXPERIMENT_ID, {
        event_category: EXPERIMENT_DEVICE_CATEGORY,
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${variationType} | ${label}`,
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
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${variationType} | ${label}`,
        send_to: GA4_PROPERTY_ID
      });
    }
  });
};

export default gaTracking;
