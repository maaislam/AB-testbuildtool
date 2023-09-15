import { getCroStorage, pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label, defaultLink) => {
  const { ID, VARIATION } = shared;
  //console.log(`012 | Variation: ${shared.VARIATION} | ${label}`);
  pollerLite([() => typeof window.gtag === 'function'], () => {
    const affiliateLinkSet = getCroStorage(`${ID}__afflinkset`);
    window.gtag('event', 'Experiment CEO Hide Casinos 026', {
      event_category: 'All Device Test',
      event_label: `026 | Variant: ${VARIATION} ${
        VARIATION === 'Control' ? '' : defaultLink || affiliateLinkSet || 'A Link'
      } | ${label}`
    });
  });
};

export default gaTracking;
