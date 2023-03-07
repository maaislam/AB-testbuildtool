/*eslint-disable no-restricted-syntax */
//import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(['body'], () => {
    console.log('able to access page', window.location);
    document.body.classList.add('HPEH001');
    document.body.addEventListener('click', (e) => {
      console.log('click', e);
    });
    const urlParams = new URLSearchParams(window.location.search);
    const paramsObj = {};

    for (const [key, value] of urlParams.entries()) {
      paramsObj[key] = value;
    }

    console.log(paramsObj);
  });
}
