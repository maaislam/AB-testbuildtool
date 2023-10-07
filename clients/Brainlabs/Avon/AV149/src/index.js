import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => window.DY?.deviceInfo?.type, '#product-detail .star-clickable'], activate);
