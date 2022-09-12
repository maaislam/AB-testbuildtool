/*eslint-disable max-len */
/*eslint-disable no-param-reassign */
import { pollerLite } from '../../../../../../../globalUtil/util';
import { purchasedIcon, purchasedIconDesktop } from '../components/assets';
import { sizeBtns, sizeBtnsMbl, sizeContainerMbl } from '../components/sizeBtns';
import clickPurchase from './clickPurchase';
import getCart from './getCart';
import { deviceType } from './pageTypes';
import purchaseItem from './purchaseItem';

const { default: sizeChartDesktop } = require('../components/sizechartDesktop');

const sizePopUp = (id) => {
    if (deviceType() === 'desktop') {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest(`.${id}__sizes-button:not(.${id}__unavailable)`)) {
                //console.log(e.target);
                //console.log('purchasing');
                const color = e.target.getAttribute('color');
                const size = e.target.textContent;
                const vId = e.target.getAttribute('variant');
                purchaseItem(color, size, vId);
                e.target.classList.add(`${id}__purchased`);
                e.target.textContent = '';
                e.target.insertAdjacentHTML('afterbegin', purchasedIconDesktop);
                setTimeout(() => {
                e.target.classList.remove(`${id}__purchased`);
                e.target.textContent = e.target.getAttribute('size');
                e.target.querySelector('svg')?.remove();
                }, 2000);
            }
        });
        document.querySelectorAll('.ProductItem').forEach((item, key) => {
            //console.log('in prod', item);
            item.addEventListener('mouseover', () => {
                //console.log('hover', item);
                if (!item.querySelector(`.${id}__add-to-cart-container`) && item.querySelector('a').getAttribute('href').indexOf('bundle') === -1) {
                    item.querySelector(`.${id}__add-to-cart-sizes`)?.remove();
                    item.querySelector('a').insertAdjacentHTML('beforeend', sizeChartDesktop(id));
                    pollerLite([() => item.getAttribute('data-obj')], () => {
                        const sizesData = JSON.parse(item.getAttribute('data-obj'));
                        sizesData.forEach((size, keys) => {
                         item.querySelector(`.${id}__add-to-cart-sizes`).insertAdjacentHTML('beforeend', sizeBtns(id));
                         item.querySelectorAll(`.${id}__sizes-button`)[keys].textContent = size.option2;
                         item.querySelectorAll(`.${id}__sizes-button`)[keys].setAttribute('size', size.option2);
                         item.querySelectorAll(`.${id}__sizes-button`)[keys].setAttribute('color', size.option1);
                         item.querySelectorAll(`.${id}__sizes-button`)[keys].setAttribute('variant', size.id);
                         if (size.available === false) {
                            //console.log('unavailable');
                            item.querySelectorAll(`.${id}__sizes-button`)[keys].classList.add(`${id}__unavailable`);
                         }
                        });
                        pollerLite([() => item.querySelector(`.${id}__Image__Loader`)], () => {
                            item.querySelector(`.${id}__Image__Loader`).classList.add(`${id}__hide`);
                          });
                          item.querySelector(`.${id}__add-to-cart-container`).addEventListener('click', (e) => {
                            e.preventDefault();
                          });
                        //document.body.addEventListener('click', (e) => {
                        //if (e.target.closest(`.${id}__sizes-button:not(.${id}__unavailable)`)) {
                        //console.log(e.target);
                        //}
                        //});
                        //document.querySelectorAll(`.${id}__sizes-button:not(.${id}__unavailable)`).forEach((btn) => {
                        ////window.jQuery(`.${id}__sizes-button:not(.${id}__unavailable)`).bind('click', clickPurchase(id));
                        //btn.addEventListener('click', () => {
                        //console.log('purchasing');
                        //const color = btn.getAttribute('color');
                        //const size = btn.textContent;
                        //const vId = btn.getAttribute('variant');
                        //purchaseItem(color, size, vId);
                        //getCart();
                        //btn.classList.add(`${id}__purchased`);
                        //btn.textContent = '';
                        //btn.insertAdjacentHTML('afterbegin', purchasedIconDesktop);
                        //setTimeout(() => {
                        //btn.classList.remove(`${id}__purchased`);
                        //btn.textContent = btn.getAttribute('size');
                        //btn.querySelector('svg')?.remove();
                        //}, 2000);
                        //});
                            //btn.removeEventListener('click', clickPurchase(id, btn), false);
                            //btn.addEventListener('click', clickPurchase(id, btn), true);
                        //});
                    });
                }
            });
        });
    } else if (deviceType() === 'mobile') {
        document.querySelectorAll('.ProductItem').forEach((item, key) => {
        item.querySelector(`.${id}__cart-icon-mbl`)?.addEventListener('click', () => {
            //console.log('clicked');
            document.querySelector('html').style.overflowY = 'hidden';
            document.body.classList.add(`${id}__stop-scroll`);
            item.querySelector(`.${id}__add-to-cart-container .${id}__add-to-cart-sizes`)?.remove();
            //document.querySelector(`.${id}__add-to-cart-mbl-container`).classList.remove(`${id}__hide`);
            document.querySelector(`.${id}__add-to-cart-mbl-container`).classList.add(`${id}__animate`);
            document.querySelector(`.${id}__Image__Loader`).classList.remove(`${id}__hide`);
            document.querySelector('.PageOverlay').classList.add('is-visible');
            if (item.querySelector('a').getAttribute('href').indexOf('bundle') === -1) {
                //item.querySelector('a').insertAdjacentHTML('afterend', sizeChartMbl(id));
                document.querySelector(`.${id}__all-sizes-mbl`)?.remove();
                document.querySelector(`.${id}__add-to-cart-mbl-container`).insertAdjacentHTML('beforeend', sizeContainerMbl(id));
                pollerLite([() => item.getAttribute('data-obj')], () => {
                    const sizesData = JSON.parse(item.getAttribute('data-obj'));
                    sizesData.forEach((size, keys) => {
                     document.querySelector(`.${id}__all-sizes-mbl`).insertAdjacentHTML('beforeend', sizeBtnsMbl(id));
                     document.querySelectorAll(`.${id}__sizes-button`)[keys].textContent = size.option2;
                     document.querySelectorAll(`.${id}__sizes-button`)[keys].setAttribute('color', size.option1);
                     document.querySelectorAll(`.${id}__sizes-button`)[keys].setAttribute('variant', size.id);
                     if (size.available === false) {
                        //console.log('unavailable');
                        document.querySelectorAll(`.${id}__sizes-button-container`)[keys].classList.add(`${id}__sold-out`);
                        document.querySelectorAll(`.${id}__atc-button`)[keys].textContent = 'Ausverkauft';
                     }
                     if (size.available === true) {
                         document.querySelectorAll(`.${id}__atc-button`)[keys].textContent = 'In den Warenkorb';
                     }
                    });
                    pollerLite([() => document.querySelector(`.${id}__Image__Loader`)], () => {
                        document.querySelector(`.${id}__Image__Loader`).classList.add(`${id}__hide`);
                      });
                    document.querySelectorAll(`.${id}__sizes-button-container:not(.${id}__sold-out)`).forEach((btn) => {
                    btn.addEventListener('click', () => {
                            // console.log('purchasing');
                            const color = btn.querySelector(`.${id}__sizes-button`).getAttribute('color');
                            const size = btn.querySelector(`.${id}__sizes-button`).textContent;
                            const vId = btn.querySelector(`.${id}__sizes-button`).getAttribute('variant');
                            purchaseItem(color, size, vId);
                            btn.querySelector(`.${id}__atc-button`).textContent = 'Hinzugefügt';
                            btn.querySelector(`.${id}__atc-icon`).insertAdjacentHTML('afterbegin', purchasedIcon);
                            btn.querySelector(`.${id}__atc-icon > svg:nth-child(2)`).classList.add(`${id}__hide`);
                            // getCart();
                            document.querySelector('#sidebar-cart').classList.add(`${id}__hidden`);
                            setTimeout(() => {
                            btn.querySelector(`.${id}__atc-button`).textContent = 'In den Warenkorb';
                            btn.querySelector(`.${id}__atc-icon > svg:nth-child(1)`)?.remove();
                            btn.querySelector(`.${id}__atc-icon > svg:nth-child(1)`)?.classList.remove(`${id}__hide`);
                            setTimeout(() => {
                            document.querySelector('.PageOverlay').click();
                            }, 1500);
                            }, 2000);
                    });
                    });
                });
            }
        });
    });
    }
};

export default sizePopUp;
