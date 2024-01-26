import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.banner img.bnrprd-v2', '.banner img.bnrprd-v2-mob'], activate);
