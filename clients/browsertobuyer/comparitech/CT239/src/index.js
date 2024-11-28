import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['h2 [href*="/l/header"]'], activate);
