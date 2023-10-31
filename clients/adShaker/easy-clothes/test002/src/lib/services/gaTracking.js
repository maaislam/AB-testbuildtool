import { pollerLite } from '../../../../../../../globalUtil/util';
import shared from '../shared/shared';

const sendTga4 = (label) => {
  const { ID, VARIATION } = shared;

  const GA4_PROPERTY_ID = 'G-HYWLS46D07';

  pollerLite([() => document.readyState === 'complete'], () => {
    if (window.gtag !== undefined) {
      window.gtag('event', 'experimentation', {
        experiment_id: `${ID}-${VARIATION}`,
        experiment_label: label,
        send_to: GA4_PROPERTY_ID
      });
    } else {
      window.dataLayer = window.dataLayer || [];
      if (window.customGtag === undefined) {
        window.customGtag = (...args) => {
          window.dataLayer.push(...args);
        };
        window.customGtag('js', new Date());
        window.customGtag('config', GA4_PROPERTY_ID);
      }
      window.customGtag('event', 'experimentation', {
        experiment_id: `${ID}-${VARIATION}`,
        experiment_label: label,
        send_to: GA4_PROPERTY_ID
      });
    }
  });
};
export default sendTga4;
