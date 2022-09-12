/* eslint-disable prefer-destructuring */
//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import { imageObj } from './component/data';
import {
  desktopPackagePanel,
  mobilePackagePanel,
  productTilte,
  desktopPackagePanelV2,
  mobilePackagePanelV2,
  desktopPackagePanelV3,
  addCheckoutStr
} from './component/static';
import slickSliderFunction from './handler/slickSlider';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION == 'control') {

  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const generalSelector = '.modal-popup.add-to-cart-popup.modal-inner-wrap-border._show';
  document
    .querySelector('.product-info-main .box-tocart #product-addtocart-button')
    .addEventListener('click', () => {
      pollerLite([`${generalSelector} .package-title`], () => {
        const collectData = {};

        collectData.packageProduct = document.querySelector(
          `${generalSelector} [id*="modal-content"] .product-title-header`
        ).innerText;
        collectData.packageHeader = document.querySelector(
          `${generalSelector} [id*="modal-content"] .package-header`
        ).innerText;

        collectData.packagePrice = document.querySelector(
          `${generalSelector} [id*="modal-content"] .package-price`
        ).innerText;
        console.log();

        collectData.packageThumbnail = imageObj[window.location.pathname].URL;

        collectData.packageTitle = window
          .jQuery('.modal-popup.add-to-cart-popup.modal-inner-wrap-border._show .package-title')
          .contents()
          .first()[0].textContent;

        console.log(collectData);

        //product title added to
        const productTitleStr = () => {
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            .insertAdjacentHTML('beforebegin', productTilte(ID, collectData));
        };

        productTitleStr();
        //slickSliderFunction(ID, generalSelector);

        if (VARIATION === '1') {
          console.log('variation 0ne tc-17');
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            ?.insertAdjacentHTML('beforebegin', desktopPackagePanel(ID, collectData));
          console.log('mobile first');
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            ?.insertAdjacentHTML('beforebegin', mobilePackagePanel(ID, collectData));
          console.log('mobile end');

          slickSliderFunction(ID, generalSelector);

          //place change
          document
            .querySelector(`${generalSelector} .products.list`)
            .insertAdjacentElement(
              'beforebegin',
              document.querySelector(`${generalSelector} .recommended-title`)
            );
        }

        if (VARIATION === '2') {
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            .insertAdjacentHTML('beforebegin', desktopPackagePanelV2(ID, collectData));

          const heightChange = () => {
            const heightMesure = document
              .querySelector('.TC-17__package-section')
              .getBoundingClientRect().height;
            document.querySelector(
              `.${ID}__secondSection .package-ticks`
            ).style.height = `${heightMesure}px`;
          };

          pollerLite(['.TC-17__package-details'], () => {
            setTimeout(() => {
              heightChange();
            }, 1500);
          });

          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            .insertAdjacentHTML('beforebegin', mobilePackagePanelV2(ID, collectData));

          slickSliderFunction(ID, generalSelector);
          //place change
          document
            .querySelector(`${generalSelector} .products.list`)
            .insertAdjacentElement(
              'beforebegin',
              document.querySelector(`${generalSelector} .recommended-title`)
            );

          window.addEventListener('resize', () => {
            heightChange();
          });
          window.addEventListener('orientationchange', () => {
            heightChange();
          });
        }

        if (VARIATION === '3') {
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            .insertAdjacentHTML('beforebegin', desktopPackagePanelV3(ID, collectData));
          document
            .querySelector(`${generalSelector} [id*="modal-content"] .add-to-cart-dialog`)
            .insertAdjacentHTML('beforebegin', addCheckoutStr(ID));
          //slickSliderFunction(ID, generalSelector);
          //place change
          document
            .querySelector(`${generalSelector} .products.list`)
            .insertAdjacentElement(
              'beforebegin',
              document.querySelector(`${generalSelector} .recommended-title`)
            );
        }

        //cross button for pop up
        document.querySelector('body').addEventListener('click', (e) => {
          if (e.target.closest(`.${ID}__package-cross`)) {
            document.querySelector(`${generalSelector} .action-close`).click();
          }

          if (e.target.closest(`.${ID}__package-add-to-cart`)) {
            document.querySelector(`${generalSelector} .package-panel button`).click();
          }

          if (e.target.closest(`.${ID}__package-add-to-checkout`)) {
            window.location.href = 'https://www.teds.com.au/checkout/';
          }
          if (e.target === document.querySelector(`${generalSelector}`)) {
            document.body.classList.remove('_has-modal');
            document.querySelector(`${generalSelector}`).remove();
            document.querySelector('.modals-overlay').remove();
          }
        });
      });
    });
};
