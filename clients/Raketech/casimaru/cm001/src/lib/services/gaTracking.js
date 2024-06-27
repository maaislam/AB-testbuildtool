import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label) => {
  const { VARIATION } = shared;

  const variationType = VARIATION === 'Control' ? 'VC' : 'V1';

  const GA4_PROPERTY_ID = 'G-C8D3Z52NHN';
  const GA4_INTERNAL_EXPERIMENT_NUM = '6340836214';
  const GA4_INTERNAL_EXPERIMENT_ID = `Include CTA on /all-bonuses/non-deposit-bonus/ page ${GA4_INTERNAL_EXPERIMENT_NUM}`;
  const EXPERIMENT_DEVICE_CATEGORY = 'Mobile Only';

  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: GA4_INTERNAL_EXPERIMENT_ID,
      event_category: EXPERIMENT_DEVICE_CATEGORY,
      event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | ${variationType} | ${label}`,
      send_to: GA4_PROPERTY_ID
    });
  });
};

export default gaTracking;
