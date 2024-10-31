import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.bullet-slideshow .swiper-initialized'], activate);
