import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

//if (window.location.pathname === '/' || window.location.pathname === '/odds/') {
pollerLite(['body', '.MuiStack-root.mui-1hdbc19', '.MuiCardContent-root.mui-5ni05f'], activate);
//}
//if (window.location.pathname === '/privacy-policy/') {
//pollerLite(['body', '.MuiStack-root.mui-1i43dhb', '.MuiCard-root.mui-epm59u'], activate);
//}
