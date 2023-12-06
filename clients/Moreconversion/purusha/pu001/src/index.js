import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.Product__Slideshow', '.Product__SlideshowMobileNav'], activate);
