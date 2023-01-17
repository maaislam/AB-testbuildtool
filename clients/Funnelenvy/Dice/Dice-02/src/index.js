import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { addJsToPage } from './lib/helpers/utils';
import { ID } from './lib/shared/shared';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const libPhone = 'https://unpkg.com/libphonenumber-js@1.10.18/bundle/libphonenumber-min.js';
if (!ieChecks) {
  addJsToPage(libPhone, `${ID}__libPhone`);
  pollerLite(['body', '#Phone', () => window.libphonenumber !== undefined], activate);
}
