import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    () =>
      document.querySelector('[data-testid="hero-section-new"]') ||
      document.querySelector('[data-testid="hero-section"]')
  ],
  activate
);
