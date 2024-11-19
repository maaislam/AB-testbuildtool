import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;

const mainConfig = {
  ID: 'web6454260285 ',
  TAG: '7751979071',
  VAR: VARIATION === '1' ? 'V1' : 'VC',
  CLIENT: 'Raketech',
  SITE: 'TVMatchen',
  CATEGORY: 'All Devices',
  GA_ID: 'G-PYHXCT8ZVD'
};

const gaTracking = (label) => {
  const { TAG, VAR, SITE, CATEGORY, GA_ID } = mainConfig;
  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: `${SITE} - TVGWEB - Betting tips promo`,
      event_category: CATEGORY,
      event_label: `${TAG} | ${VAR} | ${label}`,
      send_to: GA_ID
    });
  });
};

export default gaTracking;
