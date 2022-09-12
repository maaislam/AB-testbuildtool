/*eslint-disable no-param-reassign */
import { purchasedIconDesktop } from '../components/assets';
import getCart from './getCart';
import purchaseItem from './purchaseItem';

const clickPurchase = (id, btn) => {
    console.log('purchasing', btn);
    const color = btn.getAttribute('color');
    const size = btn.textContent;
    const vId = btn.getAttribute('variant');
    purchaseItem(color, size, vId);
    getCart();
    btn.classList.add(`${id}__purchased`);
    btn.textContent = '';
    btn.insertAdjacentHTML('afterbegin', purchasedIconDesktop);
    setTimeout(() => {
        btn.classList.remove(`${id}__purchased`);
        btn.textContent = btn.getAttribute('size');
        btn.querySelector('svg')?.remove();
    }, 2000);
};

export default clickPurchase;
