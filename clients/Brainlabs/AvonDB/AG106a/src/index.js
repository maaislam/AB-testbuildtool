import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks && window.location.pathname.includes('index.html')) {
  pollerLite(
    ['[data-item-id="diaporamaBtn"]', () => typeof window.PDP_MANAGER !== 'undefined'],
    () => {
      if (
        document.referrer.includes(`/${window.PDP_MANAGER.API_DATA.campaignId}/`) &&
        !document.referrer.includes('index.html')
      ) {
        setTimeout(() => {
          activate();
        }, 1000);
      }
    }
  );
}
