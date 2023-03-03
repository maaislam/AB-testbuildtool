import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const validUrls = [
  '/order',
  '/cart',
  '/orderApprovalDetails/',
  '/favorites/',
  '/createQuoteView',
  '/quoteConfirmSummary',
  '/createCheckoutView'
];

pollerLite(
  ['body', () => validUrls.some((validUrl) => window.location.pathname.includes(validUrl))],
  activate
);
