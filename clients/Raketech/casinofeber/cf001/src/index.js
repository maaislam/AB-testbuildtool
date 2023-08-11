import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.tabellcasino-container'], () => {
  console.log('in test');
  setTimeout(activate, 2000);
});
