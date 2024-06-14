import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.pdp-reviews#reviews .pdp-reviews-list-container'], () => {
    setTimeout(activate, 2000);
});
