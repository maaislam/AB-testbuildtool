import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const validUrls = [
  '/thank-you-webinar/',
  '/thank-you-ebook-create-reports-funders-want-to-see/',
  '/thank-you-case-study-kahnawake/',
  '/thank-you/'
];

if (validUrls.some((url) => window.location.pathname.includes(url))) {
  pollerLite(['body', '.suport-text'], activate);
}
