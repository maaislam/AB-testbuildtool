import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;
  const variationType = VARIATION === '1' ? '1' : 'C';

  const GA4_PROPERTY_ID = 'G-77TJP2RZPT';
  const GA4_INTERNAL_EXPERIMENT_NUM = 'PEXCROAB-427';
  const GA4_INTERNAL_EXPERIMENT_ID = `CRO - OCB - Match Page Optimization (iteration) ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

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
