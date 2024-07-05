import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.cbb-frequently-bought-container', '.featured-collection-fix'], activate);
