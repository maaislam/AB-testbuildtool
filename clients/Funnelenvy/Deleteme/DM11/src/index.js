import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

import shared from './lib/shared/shared';
import gaTracking from './lib/services/gaTracking';

const { VARIATION } = shared;

if (VARIATION === 'control') {
  pollerLite(['body', '#page', () => window.ga !== undefined], () => {
    if (window.location.pathname === '/scan-results/') {
      gaTracking(' step_3_completion');
    }
    document.body.addEventListener('click', ({ target }) => {
      if (target.closest('#billie-widget-submit')) {
        gaTracking('step_1_completion');
      } else if (
        window.location.pathname === '/scan-results/' &&
        target.closest('[href="/privacy-protection-plans-scan/"]')
      ) {
        gaTracking('join_deleteme');
      }
    });
  });
}
