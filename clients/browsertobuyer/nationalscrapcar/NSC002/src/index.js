import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.wrap.page-step-2', '.vehicle-details', '#submit'], activate);
setTimeout(() => {
  document.body.style.visibility = 'visible';
}, 5000);
