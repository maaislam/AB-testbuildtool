import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

import shared from './lib/shared/shared';
import { addJsToPage } from './lib/helpers/addLibrary';

const { ID } = shared;
const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const reactSrc = 'https://unpkg.com/react@18/umd/react.development.js';
const reactDOMSrc = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

if (!ieChecks && window.location.pathname === '/pages/build-a-gift') {
  addJsToPage(reactSrc, `${ID}__react`);
  addJsToPage(reactDOMSrc, `${ID}__reactDOM`);
  console.time('React load time');
  pollerLite(
    [
      'body',
      '#template-page-order',
      () => typeof window.React === 'object' && typeof window.ReactDOM === 'object'
    ],
    () => {
      console.timeEnd('React load time');
      activate();
    }
  );
}
