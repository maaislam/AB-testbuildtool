//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import { purchasedIcon, purchasedIconDesktop } from './components/assets';
import { cartIconMobile } from './components/cartIconMobile';
import sizeChartMbl from './components/sizeChartMbl';
import getCart from './helpers/getCart';
import getVarData from './helpers/getVarData';
import { collectionPg, deviceType } from './helpers/pageTypes';
import purchaseItem from './helpers/purchaseItem';
import sizePopUp from './helpers/sizePopUp';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  if (collectionPg) {
    if (deviceType() === 'mobile') {
      document.querySelectorAll('.ProductItem').forEach((item, key) => {
        if (item.querySelector('a').getAttribute('href').indexOf('bundle') === -1) {
          item.querySelector('.ProductItem__Wrapper').insertAdjacentHTML('afterbegin', cartIconMobile(ID));
        }
        //console.log('mobile');
      });
      document.querySelector('.PageContainer').insertAdjacentHTML('beforeend', sizeChartMbl(ID));
      document.querySelector('.PageOverlay').addEventListener('click', () => {
        document.querySelector(`.${ID}__add-to-cart-mbl-container`).classList.remove(`${ID}__animate`);
        document.querySelector('#sidebar-cart').classList.remove(`${ID}__hidden`);
        document.querySelector('.PageOverlay').classList.remove('is-visible');
        document.querySelector('html').style.overflowY = 'visible';
        document.body.classList.remove(`${ID}__stop-scroll`);
      });
      document.querySelector(`.${ID}__close-button`).addEventListener('click', () => {
        document.querySelector(`.${ID}__add-to-cart-mbl-container`).classList.remove(`${ID}__animate`);
        document.querySelector('#sidebar-cart').classList.remove(`${ID}__hidden`);
        document.querySelector('.PageOverlay').classList.remove('is-visible');
        document.querySelector('html').style.overflowY = 'visible';
        document.body.classList.remove(`${ID}__stop-scroll`);
      });
    }

    getVarData(ID);
    sizePopUp(ID);

  //document.body.addEventListener('click', (e) => {
  //if (e.target.closest(`.${ID}__sizes-button-container:not(.${ID}__sold-out)`)) {
  //console.log(e.target, e.target.parentNode);
      //const color = e.target.closest(`.${ID}__sizes-button`).getAttribute('color');
      //const size = e.target.closest(`.${ID}__sizes-button`).textContent;
      //const vId = e.target.closest(`.${ID}__sizes-button`).getAttribute('variant');
      //purchaseItem(color, size, vId);
      //e.target.closest(`.${ID}__atc-button`).textContent = 'Hinzugefügt';
      //e.target.closest(`.${ID}__atc-icon`).insertAdjacentHTML('afterbegin', purchasedIcon);
      //e.target.closest(`.${ID}__atc-icon > svg:nth-child(2)`).classList.add(`${ID}__hide`);
      //// getCart();
      //document.querySelector('#sidebar-cart').classList.add(`${ID}__hidden`);
      //setTimeout(() => {
      //e.target.closest(`.${ID}__atc-button`).textContent = 'In den Warenkorb';
      //e.target.closest(`.${ID}__atc-icon > svg:nth-child(1)`)?.remove();
      //e.target.closest(`.${ID}__atc-icon > svg:nth-child(1)`)?.classList.remove(`${ID}__hide`);
      //setTimeout(() => {
      //document.querySelector('.PageOverlay').click();
      //}, 1500);
      //}, 2000);
  //}
  //});

  //document.querySelectorAll(`.${ID}__sizes-button-container:not(.${ID}__sold-out)`).forEach((btn) => {
  //console.log('in buttons')
  //btn.addEventListener('click', () => {
  //console.log('purchasing');
  //const color = btn.querySelector(`.${ID}__sizes-button`).getAttribute('color');
  //const size = btn.querySelector(`.${ID}__sizes-button`).textContent;
  //const vId = btn.querySelector(`.${ID}__sizes-button`).getAttribute('variant');
  //purchaseItem(color, size, vId);
  //btn.querySelector(`.${ID}__atc-button`).textContent = 'Hinzugefügt';
  //btn.querySelector(`.${ID}__atc-icon`).insertAdjacentHTML('afterbegin', purchasedIcon);
  //btn.querySelector(`.${ID}__atc-icon > svg:nth-child(2)`).classList.add(`${ID}__hide`);
  //getCart();
  //document.querySelector('#sidebar-cart').classList.add(`${ID}__hidden`);
  //setTimeout(() => {
  //btn.querySelector(`.${ID}__atc-button`).textContent = 'In den Warenkorb';
  //btn.querySelector(`.${ID}__atc-icon > svg:nth-child(1)`)?.remove();
  //btn.querySelector(`.${ID}__atc-icon > svg:nth-child(1)`)?.classList.remove(`${ID}__hide`);
  //setTimeout(() => {
  //document.querySelector('.PageOverlay').click();
  //}, 1500);
  //}, 2000);
  //});
  //});

    if (deviceType() === 'desktop') {
      document.querySelectorAll('.ProductItem').forEach((item, key) => {
        item.addEventListener('mouseover', () => {
          item.querySelector(`.${ID}__add-to-cart-container`)?.classList.remove(`${ID}__hide`);
        });
        item.addEventListener('mouseout', () => {
          item.querySelector(`.${ID}__add-to-cart-container`)?.classList.add(`${ID}__hide`);
      });
    //document.body.addEventListener('click', (e) => {
    //if (e.target.closest(`.${ID}__sizes-button:not(.${ID}__unavailable)`)) {
    ////console.log(e.target);
    ////console.log('purchasing');
    //const color = e.target.getAttribute('color');
    //const size = e.target.textContent;
    //const vId = e.target.getAttribute('variant');
    //purchaseItem(color, size, vId);
    //e.target.classList.add(`${ID}__purchased`);
    //e.target.textContent = '';
    //e.target.insertAdjacentHTML('afterbegin', purchasedIconDesktop);
    //setTimeout(() => {
    //e.target.classList.remove(`${ID}__purchased`);
    //e.target.textContent = e.target.getAttribute('size');
    //e.target.querySelector('svg')?.remove();
    //}, 2000);
    //}
    //});
      });
    }
  }
};

export default () => {
  init();
};
