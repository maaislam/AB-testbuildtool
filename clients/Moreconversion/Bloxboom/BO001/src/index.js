import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['section.bg-transparent'], () => {
    setTimeout(() => {
        activate();
    }, 500);
});
