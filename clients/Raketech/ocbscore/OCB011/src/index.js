import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const bettingCards = document.querySelectorAll('.MuiBox-root.mui-1bx5ylf');

pollerLite(['body', () => bettingCards && bettingCards.length > 0], () =>
  setTimeout(activate, 2000)
);
