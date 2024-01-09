import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const isMobile = window.innerWidth < 768;

const selectorToWaitFor = isMobile ? '.mobile-nav' : '.site-nav';

pollerLite([selectorToWaitFor], activate);
