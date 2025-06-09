import { brainIcon } from '../assets/icons';
import { logo } from './logo';
import { mobileLogoWithTitle } from './mobileLogoWithTitle';
import reviewcards from './reviewCards';
import { uspsList } from './uspsList';
import { videoWrapper } from './videoWrapper';

export const headerBanner = (id, data) => {
  const html = `
        <div class="${id}__headerBannerWrapper">
            <div class="${id}__headerBannerContainer">
                ${logo(id)}
                <div class="${id}__contentHero">
                    ${mobileLogoWithTitle(id)}
                    <div class="${id}__contentWrapper">
                        <h3 class="${id}__msg">ATTENTION: Go-getters &amp; Biohackers</h3>
                        <h1 class="${id}__title">EASILY WAKE UP TO MORNING ENERGY ON YOUR NIGHTSTAND</h1>
                        <a href="#16074793" target="_self" class="${id}__btn ${id}__desktop-btn">
                            <span class="${id}__text">Switch On Your Brain</span>
                            <span class="${id}__icon">${brainIcon}</span>
                        </a>
                        ${uspsList(id, 'desktop')}
                    </div>
                    <div class="${id}__videoWrapper">
                        <div class="${id}__videoContainer">
                            ${videoWrapper(id)}
                        </div>
                        <div class="${id}__reviewsContainer">
                            ${reviewcards(id, data)}
                        </div>
                         <a href="#16074793" target="_self" class="${id}__btn ${id}__mobile-btn">
                            <span class="${id}__text">Switch On Your Brain</span>
                            <span class="${id}__icon">${brainIcon}</span>
                        </a>
                        ${uspsList(id, 'mobile')}
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};
