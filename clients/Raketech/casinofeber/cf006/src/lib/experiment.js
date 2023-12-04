import { observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;
const init = () => {
  const htmlStr = `<div class='${ID}__cardContainer'>
        <div class='${ID}__card'>
            <div class='${ID}__cardHeader'>
                <span class='${ID}__header-text'>Månadens Casino</span>
                <span class='${ID}__header-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M12.6104 15.2H5C3.89543 15.2 3 14.3045 3 13.2V7.69995H5.67963C6.34834 7.69995 6.9728 7.36575 7.34373 6.80935L9.03075 4.27883C9.4801 3.60481 10.2366 3.19995 11.0467 3.19995C11.5457 3.19995 11.9253 3.64807 11.8433 4.14033L11.25 7.69995H13.3104C14.5725 7.69995 15.5191 8.8546 15.2716 10.0922L14.5716 13.5922C14.3846 14.527 13.5638 15.2 12.6104 15.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 7.69995V15.2" stroke="white" stroke-width="2"/>
                    </svg>
                </span>
            </div>
            <div class='${ID}__cardBody'>
                    <a class="${ID}__logo img" href="/spela/happy-casino" rel="nofollow noreferrer">
                        <img loading="eager" alt="casino" src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinofaber/happycasino-desktop.png">
                    </a>
                <div class='${ID}__content'>
                    <div class='${ID}__content-details'>
                        <span class='details'>Smidig registrering och snabba uttag. 50 omsättningsfria free spins på slot med progressiv jackpott</span>
                        <div class="${ID}__toplist-terms">
                            Reklamlänk | 18+ | <a href="/spela/happy-casino/villkor" target="_blank" rel="nofollow noreferrer noopener"> Regler &amp; villkor gäller </a> | Spela ansvarsfullt | <a href="https://www.stodlinjen.se" target="_blank" rel="nofollow noreferrer noopener">stodlinjen.se</a>
                        </div>
                    </div>
                    <a href='/spela/happy-casino' class='${ID}__content-btn' target='_blank'>
                        <span>Till casinot</span>
                    </a>
                </div>
            </div>
        </div>
        <div class='${ID}__footer'>
            <div class="${ID}__toplist-terms">
                Reklamlänk | 18+ | <a href="/spela/happy-casino/villkor" target="_blank" rel="nofollow noreferrer noopener"> Regler &amp; villkor gäller </a> | Spela ansvarsfullt | <a href="https://www.stodlinjen.se" target="_blank" rel="nofollow noreferrer noopener"> stodlinjen.se</a>
            </div>
        </div>
    </div>`;
  const anchorPoint = document.querySelector('.toplist-holder h3');
  if (!document.querySelector(`.${ID}__cardContainer`)) {
    anchorPoint.insertAdjacentHTML('afterend', htmlStr);
  }
};

export default () => {
  setup();
  init();
  observeDOM('.toplist-holder', init);
};
