import activate from './lib/experiment';
import ocbTest from './lib/helpers/ocbTest';
import { pollerLite } from './lib/helpers/utils';

ocbTest();
pollerLite(['body', '.OCB005'], activate);
