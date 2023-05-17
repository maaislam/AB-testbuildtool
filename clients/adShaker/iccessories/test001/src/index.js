import { pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';
import shared from './lib/shared/shared';

const { ID } = shared;

pollerLite(
  [
    'body',
    '.product-page-info',
    () => document.querySelectorAll('.product-page-info .jdgm-prev-badge').length > 1
  ],
  () => {
    setup();
    const revBlocks = document.querySelectorAll('.product-page-info .jdgm-prev-badge');
    revBlocks.forEach((revBlock) => {
      const { numberOfReviews } = revBlock.dataset;
      const newText = `${numberOfReviews} reviews`;
      const badgeText = revBlock.querySelector('.jdgm-prev-badge__text');
      badgeText.style.display = 'none';
      if (revBlock.querySelector(`.${ID}__reviewtext`)) return;
      badgeText.insertAdjacentHTML('afterend', `<span class="${ID}__reviewtext">${newText}</span>`);
    });
  }
);
