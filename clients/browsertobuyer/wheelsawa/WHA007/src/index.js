import activate from './lib/experiment';
import startV2Experiment from './lib/helpers/startV2Experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/quote/sa/') {
  pollerLite(
    ['body', 'header', () => window.location.pathname === '/quote/sa/'],
    startV2Experiment
  );
} else {
  pollerLite(['body', '#makeForm'], activate);
}
