import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    'main .pricing-box',
    () => document.querySelectorAll('.pricing-box-content-cycle .text-bold.h2').length > 0
  ],
  () => setTimeout(activate, 2000)
);
