import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import bettingInfo from './components/bettingInfo';
import overlayWrapper from './components/overlayWrapper';

const { ID, VARIATION } = shared;

const renderBettingNumberDom = (bettingCard, number) => {
  const bettingNumber = document.createElement('div');
  bettingNumber.classList.add(`${ID}__bettingNumber`);
  bettingNumber.textContent = number;
  bettingCard.appendChild(bettingNumber);
};

const init = () => {
  const bettingCards = document.querySelectorAll('.MuiBox-root.mui-1bx5ylf');
  bettingCards.forEach((bettingCard, index) => {
    const bettingLogo = bettingCard.querySelector('[data-type="logo"]');
    const logoInfoContainer = bettingCard.querySelector('.MuiBox-root.mui-1tvzmmu');
    const bettingBodyElem = bettingCard.querySelector('.mui-rpu3p3');
    const bonusElem = bettingCard.querySelector('.MuiBox-root.mui-cucwis');
    const reviewIcon = bettingCard.querySelector('span[role="img"]');
    const promoCodeWrapper = bettingCard.querySelector('.MuiBox-root.mui-ynfioq');
    const reviewButton = bettingCard.querySelector('a[href^="/betting-sites/"]');

    bettingCard.classList.add(`${ID}__bettingCard`);

    //add betting number element
    if (!bettingCard.querySelector(`.${ID}__bettingNumber`)) {
      renderBettingNumberDom(bettingCard, index + 1);
    }

    //add promo code wrapper
    if (promoCodeWrapper && !bettingCard.querySelector(`.${ID}__promoCodeWrapper`)) {
      bettingCard.insertAdjacentElement('beforeend', promoCodeWrapper);
      promoCodeWrapper.classList.add(`${ID}__promoCodeWrapper`);
    }

    //add review dom in the logo
    if (reviewButton && reviewIcon && !bettingCard.querySelector(`.${ID}__reviewContainer`)) {
      reviewIcon.insertAdjacentElement('beforebegin', reviewButton);
      reviewButton.classList.add(`${ID}__reviewContainer`);
      reviewButton.appendChild(reviewIcon);
    }

    //add info wrapper
    if (bettingBodyElem && !bettingCard.querySelector(`.${ID}__bettingInfoContainer`)) {
      bettingBodyElem.insertAdjacentHTML('afterbegin', bettingInfo(ID));
      const bettingInfoElem = bettingCard.querySelector(`.${ID}__bettingInfo`);
      if (bonusElem) {
        bettingInfoElem.insertAdjacentElement('afterbegin', bonusElem);
      }
    }

    //add overlay
    if (!bettingCard.querySelector(`.${ID}__overlayWrapper`)) {
      bettingLogo.insertAdjacentHTML('beforeend', overlayWrapper(ID));
    }
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('button')) {
      const remainingBettingCards = document.querySelectorAll(
        `.MuiBox-root.mui-1bx5ylf:not(.${ID}__bettingCard)`
      );

      console.log(remainingBettingCards, 'remainingBettingCards');
      pollerLite([`.MuiBox-root.mui-1bx5ylf:not(.${ID}__bettingCard)`], init);
    }
  });
  if (VARIATION === 'control') return;

  init();

  onUrlChange(() => {
    const bettingCards = document.querySelectorAll('.MuiBox-root.mui-1bx5ylf');
    pollerLite(
      [() => bettingCards && bettingCards.length > 0, () => window.location.pathname === '/'],
      init
    );
  });
};
