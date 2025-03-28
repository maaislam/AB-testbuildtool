import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

<<<<<<< HEAD
const { pathname } = window.location;

if (pathname.includes('/net-admin/')) {
  pollerLite(['.entry-content > ol'], activate);
}
=======
pollerLite(['.entry-content ol a[href*="/l/list"]'], activate);
>>>>>>> 60cc775acd3f39b51ddb389a97c88f7126d668ed
