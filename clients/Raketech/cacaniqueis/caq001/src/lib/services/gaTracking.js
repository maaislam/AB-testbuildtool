import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const GA4_INTERNAL_EXPERIMENT_NUM = '6172106801';
  const GA4_INTERNAL_EXPERIMENT_ID = `cro-${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  const variationType =
    VARIATION === '1' ? 'B' : VARIATION === '2' ? 'C' : VARIATION === '3' ? 'D' : 'A';

  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V-${variationType} | ${label}`
    });
  });
};

export default gaTracking;
