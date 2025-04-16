import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;

const mainConfig = {
  TAG: 'PEXCROAB-1010',
  VARIATION_TYPE: VARIATION === '1' ? 'V1' : 'VC',
  CLIENT: 'Raketech',
  SITE: 'Turtlebet',
  CATEGORY: 'All Devices',
  GA_ID: 'G-GVMFN4E0HP'
};

const gaTracking = (label) => {
  const { TAG, VARIATION_TYPE, SITE, CATEGORY, GA_ID } = mainConfig;
  pollerLite([() => document.readyState === 'complete'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_detail: `${SITE} - CRO - TB - Relocate review page button for the Toplist Card - ${TAG}`,
      event_category: CATEGORY,
      event_label: `${TAG} | ${VARIATION_TYPE} | ${label}`,
      send_to: GA_ID
    });
  });
};

export default gaTracking;
