import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID, VARIATION } = shared;

const DOM_RENDER_DELAY = 1000;

if (window.location.pathname.includes('/natcasino')) {
  pollerLite(['body'], () => {
    setTimeout(activate, DOM_RENDER_DELAY);
  });
}
