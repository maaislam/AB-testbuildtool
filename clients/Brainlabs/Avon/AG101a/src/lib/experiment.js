/*eslint-disable no-param-reassign */
import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';

import newCoupon from './components/couponForm';
import couponSubmitHandler from './helpers/clickHandler';
import getCouponMsg from './helpers/getCoupnMsg';
import obsIntersection from './helpers/observeIntersection';

import shared from './shared/shared';

const { ID, VARIATION } = shared;
const init = () => {
  const couponContainer = document.querySelector('.Cart-Coupon');
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);

  if (VARIATION === '1') {
    couponContainer.classList.add(`${ID}__hide`);
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  //get control coupon status

  const couponData = getCouponMsg();

  const anchorElm = document.querySelector('.CartHeader');
  document.querySelectorAll(`.${ID}__cartCoupon`).forEach((item) => item?.remove());

  anchorElm.insertAdjacentHTML('afterend', newCoupon(ID, couponData));
  //add clicks listener
  //attach actions

  const couponSubmit = document.querySelector(`.${ID}__cartCoupon a`);
  couponSubmit.addEventListener('click', ({ target }) => {
    couponSubmitHandler(target, fireEvent, shared, true);
  });
};

export default () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);
  fireEvent('Conditions Met', shared);
  const couponContainer = document.querySelector('.Cart-Coupon');
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    document.querySelector('.Cart-Coupon .Cart-NoCoupon a').addEventListener('pointerup', () => {
      fireEvent('User clicked ‘Apply’ on voucher code', shared);
      setTimeout(() => {
        getCouponMsg(fireEvent, shared, true);
      }, 2000);
    });
    const intersectionCallback = (entry) => {
      if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        entry.target.classList.add(`${ID}__seen`);
        fireEvent('User saw voucher code element (bottom)', shared);
      }
    };

    obsIntersection(couponContainer, 0.5, intersectionCallback);
    return;
  }
  init();

  fireEvent('User saw voucher code element (top)', shared);

  document.querySelector('.Cart-Coupon .Cart-NoCoupon a').addEventListener('pointerup', () => {
    setTimeout(() => {
      getCouponMsg(fireEvent, shared, true);
    }, 2000);
  });

  //listen for control coupon changes
  couponContainer.classList.add(`${ID}__control-coupon`);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      setTimeout(() => {
        init();
      }, 500);
    });
  });

  const config = {
    childList: true,
    subtree: true
  };
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      fireEvent('User saw voucher code element (bottom)', shared);
    }
  };

  obsIntersection(couponContainer, 0.5, intersectionCallback);

  observer.observe(couponContainer, config);
};
