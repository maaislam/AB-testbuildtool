import { pollerLite } from '../../../../../../../globalUtil/util';
import checkoutBtn from '../components/chekoutBtn';

import shared from '../shared/shared';

const sideCartBtnHandler = (runWithoutCheck) => {
  const oldCheckoutBtn = runWithoutCheck
    ? ['[data-tau="start_checkout_bottom"]']
    : ['[data-tau="minicart_start_checkout"]'];

  pollerLite(oldCheckoutBtn, () => {
    // console.log('in pollerlite')
      document
        .querySelectorAll(`[data-tau="${shared.ID}__minicart_start_checkout"]`)
        .forEach((item) => {
          item.remove();
          // console.log('removed')
        });
      const oldBtn = [
        ...document.querySelectorAll('[data-tau^="minicart_start_checkout"]'),
        ...document.querySelectorAll('[data-tau="start_checkout_bottom"]')
      ];
      oldBtn.forEach((item) => {
        item?.classList.add(`${shared.ID}__hide`);

        item?.insertAdjacentHTML('afterend', checkoutBtn(shared.ID));
      });
  });
};

export default sideCartBtnHandler;
