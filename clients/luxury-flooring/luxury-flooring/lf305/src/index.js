import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.catalog-category-view', '#maincontent > .columns'], activate);
