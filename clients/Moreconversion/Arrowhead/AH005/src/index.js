import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-index', '.hero__text-wrap .hero__link'], activate);
