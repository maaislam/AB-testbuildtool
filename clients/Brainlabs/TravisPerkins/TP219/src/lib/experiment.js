import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import clickCollectMessages from './components/clickBanner';
import tradePriceMsg from './components/tradePrice';

import { postcodes, tradeSkuPrice } from './data';
import { postcodeMatch } from './helpers/checkpostcode';
import skuValidity from './helpers/checkSkuValidity';
import { getCookie } from './helpers/cookie';
import obsIntersection from './helpers/observeIntersection';
import { deviceType, isPDP, isPLP } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = (mutation) => {
  //console.log(mutation);
  setup('Experimentation', `TravisPerkins - ${ID}`);

  const isLoggedIn = !!getCookie('access_token');

  const isMobile = deviceType() !== 'desktop';

  //render pdp changes

  //check if user in pdp && userLoginStatus && sku && postcode

  if (isPDP() && skuValidity(tradeSkuPrice) && postcodeMatch(postcodes)) {
    const anchorElm =
      document.querySelector('[data-test-id="login-or-register-block"]') ||
      document.querySelector('[data-test-id="price"][class^="TradePriceBlock__Wrapper-sc"]');
    const prodSkuText = document.querySelector('[data-test-id="product-code"]').innerText;
    const extractSkuNumber = isMobile ? prodSkuText.split(': ')[1] : prodSkuText;
    if (!document.querySelector(`.${ID}__tradeprice`)) {
      VARIATION != 2 &&
        tradePriceMsg(ID, isLoggedIn, tradeSkuPrice[extractSkuNumber], anchorElm, fireEvent);
    }
    const CollectionAvailable = !document.querySelector('[data-test-id="add-to-collection-btn"]')
      .disabled;

    if (CollectionAvailable && !document.querySelector(`.${ID}__click-collect`)) {
      const anchorElm =
        document.querySelector('[class^="ProductDetailDesktop__OrderButtonsWrapper-sc"]') ||
        document.querySelector('[class^="ProductDetailMobile__OrderButtonsWr-sc"]');
      VARIATION != 1 && clickCollectMessages(ID, anchorElm);
    }

    const intersectionCallback = (entry) => {
      if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        entry.target.classList.add(`${ID}__seen`);
        fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: Conditions Met`);

        if (
          !isLoggedIn &&
          sessionStorage.getItem(`${ID}__pdpPriceMsgSeen`) !== 'true' &&
          VARIATION != 2
        ) {
          fireEvent(
            `Test ID: ${ID} Variation: ${VARIATION} Label: Viewed message with price on PDP`
          );

          sessionStorage.setItem(`${ID}__pdpPriceMsgSeen`, 'true');
        }
      }
    };
    const clickCollectIntersection =
      document.querySelector(`.${ID}__click-collect`) ||
      document.querySelector(`.${ID}__tradeprice`);

    obsIntersection(clickCollectIntersection, 0.5, intersectionCallback);
  } else if (isPLP() && postcodeMatch(postcodes)) {
    //render stuff based on login status

    const prodCards = document
      .querySelector('[data-test-id="plp-list"]')
      .querySelectorAll('[data-test-id="product"]');
    prodCards.forEach((card) => {
      const cardSku = card
        .querySelector('[data-test-id="product-card-code"]')
        .innerText.split(': ')[1];
      VARIATION != 2 &&
        card.querySelector('[class^="Layouts__GridEqu"]')?.classList.add(`${ID}__height-adjust`);
      if (skuValidity(tradeSkuPrice, cardSku)) {
        const anchorElem = card.querySelector('[data-test-id="qty-selector"]');
        VARIATION != 2 &&
          card
            .querySelector('[class^="Layouts__GridEqu"]')
            ?.classList.remove(`${ID}__height-adjust`);
        if (!card.querySelector(`.${ID}__tradeprice`)) {
          VARIATION != 2 &&
            tradePriceMsg(ID, isLoggedIn, tradeSkuPrice[cardSku], anchorElem, fireEvent, 'plp');
          const CollectionAvailable = !card.querySelector('[data-test-id="add-to-collection-btn"]')
            .disabled;

          if (CollectionAvailable && !card.querySelector(`.${ID}__click-collect`)) {
            const anchorElm =
              card.querySelector('[class^="ProductDetailDesktop__OrderButtonsWrapper-sc"]') ||
              card.querySelector('[class^="ProductDetailMobile__OrderButtonsWr-sc"]');
            VARIATION != 1 && clickCollectMessages(ID, anchorElm, 'plp', card);
          }
        }
      }
    });
    const intersectionCallback = (entry) => {
      if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        entry.target.classList.add(`${ID}__seen`);
        fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: Conditions Met`);
        if (!isLoggedIn && sessionStorage.getItem(`${ID}__plpPriceMsgSeen`) !== 'true') {
          fireEvent(
            `Test ID: ${ID} Variation: ${VARIATION} Label: Viewed message with price on PLP`
          );
          sessionStorage.setItem(`${ID}__plpPriceMsgSeen`, 'true');
        }
      }
    };
    const tradePriceIntersection =
      document.querySelector(`.${ID}__tradeprice`) ||
      document.querySelector(`.${ID}__click-collect`);
    obsIntersection(tradePriceIntersection, 0.5, intersectionCallback);
  } else if (isPDP() && (!skuValidity(tradeSkuPrice) || !postcodeMatch(postcodes))) {
    document.querySelector(`.${ID}__tradeprice`)?.remove();
    document.querySelector(`.${ID}__click-collect`)?.remove();
    const anchorElm =
      document.querySelector('[data-test-id="login-or-register-block"]') ||
      document.querySelector('[data-test-id="price"][class^="TradePriceBlock__Wrapper-sc"]');
    anchorElm.classList.remove(`${ID}__hide`);
    anchorElm.removeAttribute('style');
  }
};

export default () => {
  //init();
  setup('Experimentation', `TravisPerkins - ${ID}`);

  //Poll and re-run init
  pollerLite(['#app-container'], () => {
    const appContainer = document.querySelector('#app-container');
    const controlInit = () => {
      //console.log('testingggg', isPLP());
      if (isPDP() && skuValidity(tradeSkuPrice) && postcodeMatch(postcodes)) {
        fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: Conditions Met`);
      } else if (postcodeMatch(postcodes)) {
        //console.log('I am in plp');
        const prodCards = document
          .querySelector('[data-test-id="plp-list"]')
          .querySelectorAll('[data-test-id="product"]');
        prodCards.forEach((card) => {
          const cardSku = card
            .querySelector('[data-test-id="product-card-code"]')
            .innerText.split(': ')[1];
          if (
            skuValidity(tradeSkuPrice, cardSku) &&
            !document.querySelector(`.${ID}__plp-condition-met`)
          ) {
            fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: Conditions Met`);

            appContainer
              .querySelector('[data-test-id="plp-wrapper"]')
              .classList.add(`${ID}__plp-condition-met`);
          }
        });
      }
    };

    if (VARIATION == 'control') {
      setTimeout(controlInit, 2000);
      document.body.addEventListener('click', (e) => {
        if (!isPDP()) return;
        const { target } = e;
        //console.log('target', target);
        const loginBtn = '[data-test-id="link"][href="/login"]';
        const signupBtn = '[data-test-id="link"][href="/activate"]';
        const targetMatched = (desiredMatch) =>
          target.matches(desiredMatch) || target.closest(desiredMatch);
        if (targetMatched(loginBtn)) {
          fireEvent(
            `Test ID: ${ID} Variation: ${VARIATION} Label: Clicks of “Login” in existing element on PDP`
          );
        } else if (targetMatched(signupBtn)) {
          fireEvent(
            `Test ID: ${ID} Variation: ${VARIATION} Label: Clicks of “Register” in existing element on PDP`
          );
        }
      });
    }
    let oldHref = document.location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        setTimeout(() => {
          const validPage = isPDP() || isPLP();
          validPage && init(mutation);
        }, 2000);

        if (oldHref !== document.location.href) {
          oldHref = document.location.href;

          document.body.classList.remove(`${shared.ID}`);

          if (VARIATION == 'control') {
            setTimeout(controlInit, 2000);
          }
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
      CharacterData: true
    };

    observer.observe(appContainer, config);
  });
};
