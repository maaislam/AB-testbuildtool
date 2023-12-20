import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-ga-action="Operators > Bonus index"]'], activate);
