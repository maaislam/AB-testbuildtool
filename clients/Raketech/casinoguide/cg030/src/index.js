import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID, VARIATION } = shared;

if (!document.documentElement.classList.contains(`${ID}-${VARIATION}`)) {
  pollerLite(['body'], () => {
    const DOM_RENDER_DELAY = 1000;
    setTimeout(activate, DOM_RENDER_DELAY);
  });
}
