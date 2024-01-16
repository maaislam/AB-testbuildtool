import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const VAR = VARIATION === 'Control' ? 'C' : `Variant ${VARIATION}`;

  const GA4_INTERNAL_EXPERIMENT_NUM = '5618132564';
  const GA4_INTERNAL_EXPERIMENT_ID = `Experiment Gray Scale ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';

  pollerLite([() => document.readyState === 'complete'], () => {
    //console.log(label);

    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V:${VAR} | ${label}`
    });
  });
};
export default gaTracking;
