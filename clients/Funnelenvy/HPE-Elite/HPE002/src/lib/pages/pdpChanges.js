import { pollerLite } from '../../../../../../../globalUtil/util';
import contactCta from '../components/contactCta';
import setup from '../services/setup';
import shared from '../shared/shared';

const { ID } = shared;
export default () => {
  setup();

  pollerLite(['#add-to-cart'], () => {
    const configureButton = document.querySelector('.configureButton');

    if (configureButton) {
      return;
    }
    const atcCta = document.querySelector('#add-to-cart');
    if (atcCta && !document.querySelector(`.${ID}__contactcommercial`)) {
      atcCta.insertAdjacentHTML('beforebegin', contactCta(ID));

      atcCta.classList.add(`${ID}__hide`);
    }
  });
};
