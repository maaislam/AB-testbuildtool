import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

console.log('TEST RUNNING');
pollerLite(['body'], activate);
