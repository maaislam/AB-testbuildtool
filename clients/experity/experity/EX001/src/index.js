import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#marketing-template .spz-bg-wrap'], activate);
