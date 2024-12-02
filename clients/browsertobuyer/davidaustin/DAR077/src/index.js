import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[id*="help-drawer"] label'], activate);
