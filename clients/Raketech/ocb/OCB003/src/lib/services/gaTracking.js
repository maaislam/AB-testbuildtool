import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;
  const variationType = VARIATION === '1' ? '1' : VARIATION === '2' ? '2' : 'C';

  const GA4_PROPERTY_ID = 'G-77TJP2RZPT';
  const GA4_INTERNAL_EXPERIMENT_NUM = '7323259778';
  const GA4_INTERNAL_EXPERIMENT_ID = `Show more CTA on toplist ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'Mobile Only';

  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${variationType} | ${label}`,
      send_to: GA4_PROPERTY_ID
    });
  });
};

export default gaTracking;
