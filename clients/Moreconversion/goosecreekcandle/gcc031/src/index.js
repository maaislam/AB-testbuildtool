import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', () => document.querySelectorAll('.shogun-image-container')[0]], activate);
