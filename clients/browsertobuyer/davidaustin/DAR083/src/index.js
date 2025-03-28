import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', 'form[action="/search"] input:not(#HeaderSearch)'], activate);
