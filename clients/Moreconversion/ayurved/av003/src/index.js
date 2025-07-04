import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', () => document.querySelectorAll('.cart__item').length > 0], activate);
