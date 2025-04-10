import activate from './lib/experiment';
import { isLogin, pollerLite } from './lib/helpers/utils';

pollerLite(['body.catalog-product-view', '#productCarousel', () => !isLogin()], activate);
