import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body'], () => {
  const DOM_RENDER_DELAY = 1000;
  setTimeout(activate, DOM_RENDER_DELAY);
});
