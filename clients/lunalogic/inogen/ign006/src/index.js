import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', () => document.querySelectorAll('.fs-subtitle').length > 0], activate);
