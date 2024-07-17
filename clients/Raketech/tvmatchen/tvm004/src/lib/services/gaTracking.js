import { pollerLite } from '../helpers/utils';

const mainConfig = {
  ID: 'web6454260285 ',
  TAG: '7006172557',
  VARIATION: 'V1',
  CLIENT: 'Raketech',
  SITE: 'TVMatchen',
  CATEGORY: 'Mobile',
  GA_ID: 'G-PYHXCT8ZVD'
};

const gaTracking = (label) => {
  const { TAG, VARIATION, SITE, CATEGORY, GA_ID } = mainConfig;
  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: `${SITE} - TVG - Remove Ads - Validate user adoption`,
      event_category: CATEGORY,
      event_label: `${TAG} | ${VARIATION} | ${label}`,
      send_to: GA_ID
    });
  });
};

export default gaTracking;
