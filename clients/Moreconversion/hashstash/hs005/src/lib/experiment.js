import setup from './services/setup';

import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed

  if (VARIATION === '1') {
    pollerLite(
      ['#shopify-block-reelup_shoppable_videos_reels_reelup_product_slider_q6W4Ap'],
      () => {
        const reel1 = document.querySelector(
          '#shopify-block-reelup_shoppable_videos_reels_reelup_product_slider_q6W4Ap'
        );
        reel1.style.display = 'block';
      }
    );
  } else if (VARIATION === '2') {
    pollerLite(
      ['#shopify-block-reelup_shoppable_videos_reels_reelup_product_slider_KeFMBD'],
      () => {
        const reel2 = document.querySelector(
          '#shopify-block-reelup_shoppable_videos_reels_reelup_product_slider_KeFMBD'
        );
        reel2.style.display = 'block';
      }
    );
  }
};
