import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.inner .form-row'], activate);
