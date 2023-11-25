import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

pollerLite(['body', '.main_class.oneetime'], () => {
  const middleCard = document.querySelector('.package-card__text-2');
  const packStrip = document.querySelector('.pkg_strip');

  if (!middleCard || !packStrip) return;

  document.body.classList.add(`${ID}__most-popular`);
});
