import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-selling-plan-group="1"] .seal-row'], activate);
