import activate, { renderThankYou } from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('/thankyou/?leadid=')) {
  pollerLite(['body'], renderThankYou);
} else {
  pollerLite(['body', '.heroSection'], activate);
}
