import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.products', () => document.querySelectorAll('.product').length > 6], activate);
