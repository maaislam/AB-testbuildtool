import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const GA4_INTERNAL_EXPERIMENT_NUM = '5618135091';
  const GA4_INTERNAL_EXPERIMENT_ID = `cro-${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  pollerLite([() => document.readyState === 'complete'], () => {
    //console.log(label);
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${VARIATION === 'Control' ? 'C' : VARIATION
        } | ${label}`
    });
  });
};

export default gaTracking;
