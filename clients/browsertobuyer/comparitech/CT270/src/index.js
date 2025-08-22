import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import trackGA4Event from './lib/services/gaTracking';

pollerLite(['.entry-content ol li a[href*="/l/list"]'], () => {
  activate();
});
