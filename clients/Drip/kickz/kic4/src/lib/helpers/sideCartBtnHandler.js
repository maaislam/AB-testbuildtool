import checkoutBtn from '../components/chekoutBtn';

import shared from '../shared/shared';

const sideCartBtnHandler = () => {
  setTimeout(() => {
    document
      .querySelectorAll(`[data-tau="${shared.ID}__minicart_start_checkout"]`)
      .forEach((item) => {
        item.remove();
      });
    const oldBtn = [
      ...document.querySelectorAll('[data-tau^="minicart_start_checkout"]'),
      ...document.querySelectorAll('[data-tau="start_checkout_bottom"]'),
    ];
    oldBtn.forEach((item) => {
      item?.classList.add(`${shared.ID}__hide`);

      item?.insertAdjacentHTML('afterend', checkoutBtn(shared.ID));
    });
  }, 1000);
};

export default sideCartBtnHandler;
