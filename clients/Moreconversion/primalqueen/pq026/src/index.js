import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#join_pkg', '.swiper.mySwiper2 .swiper-wrapper'], activate);
