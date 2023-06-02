/*eslint-disable function-paren-newline */
import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/svenska-casinon/') {
  pollerLite(['body', '#__next', '#header-container', '[class^="toplistOList__"]'], () =>
    setTimeout(activate, 2000)
  );
}
