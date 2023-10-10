import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-test-id="header-search-button"] [data-test-id="input-wrapper"]'], activate);
