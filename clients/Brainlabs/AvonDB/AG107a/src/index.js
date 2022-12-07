import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(['body', '[src^="common/data/0002.svg"]'], () => {
    setTimeout(() => {
      const howToImage = document.querySelector('[src^="common/data/0002.svg"]');

      howToImage?.setAttribute(
        'src',
        'https://cdn-eu.dynamicyield.com/api/9877979/images/1a4b1002a849__asset_8_3x.png'
      );
    }, 500);
  });
  pollerLite(['body', '.v7__maps__hotspot'], () => {
    setTimeout(() => {
      activate();
    }, 500);
  });
}
