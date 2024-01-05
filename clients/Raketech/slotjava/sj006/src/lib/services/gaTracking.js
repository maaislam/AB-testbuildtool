import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const GA4_PROPERTY_ID = 'G-2NN37L2RT4';
  const GA4_INTERNAL_EXPERIMENT_NUM = '5759498892';
  const GA4_INTERNAL_EXPERIMENT_ID = `cro-${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  pollerLite([() => document.readyState === 'complete'], () => {
    //console.log(label);

    window.dataLayer.push({
      event: 'Experimentation',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
