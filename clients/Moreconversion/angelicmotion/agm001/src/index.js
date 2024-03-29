/*eslint-disable no-underscore-dangle */
import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/products/')) {
  pollerLite(['body', () => typeof window.__productWizRioProduct !== 'undefined'], activate);
}
