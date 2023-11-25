import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  console.log(ID);
  setTimeout(() => {
    const afterPayElem = document.querySelector('square-placement').shadowRoot.querySelector('p.afterpay-paragraph > span');
    afterPayElem.classList.add(`${ID}__afterpay-paragraph`);
    afterPayElem.style = 'font-size: 12px;';
  }, 3000);
};
