import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'div.background-container',
    'form.mktoForm #Country',
    () => typeof window.digitalData.form === 'object',
    () => typeof window.s !== 'undefined'
  ],
  activate
);
