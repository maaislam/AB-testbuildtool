import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;
  const varTitle = VARIATION === 'Control' ? 'C' : VARIATION;

  const GA4_PROPERTY_ID = 'G-H91NBPERDS';
  const GA4_INTERNAL_EXPERIMENT_NUM = '5758485106';
  const GA4_INTERNAL_EXPERIMENT_ID = `${GA4_INTERNAL_EXPERIMENT_NUM} | Topist Card Update Experiment`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  pollerLite([() => document.readyState === 'complete'], () => {
    //console.log(label);
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V:${varTitle} | ${label}`,
      send_to: GA4_PROPERTY_ID
    });
  });
};
export default gaTracking;
