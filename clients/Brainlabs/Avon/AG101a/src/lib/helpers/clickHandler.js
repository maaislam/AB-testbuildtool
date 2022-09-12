import getCouponMsg from './getCoupnMsg';
import triggerEvent from './triggerEvent';

const couponSubmitHandler = (target, fireEvent, shared, onSubmit) => {
  const targetMatched = (targetStrToMatch) =>
    target.matches(targetStrToMatch) || target.closest(targetStrToMatch);

  const controlSubmitBtn = document.querySelector('.Cart-Coupon .Cart-NoCoupon a');

  if (targetMatched(`.${shared.ID}__cartCoupon--button`)) {
    const couponCode = target.closest('form').querySelector('input').value;
    const controlCouponInputs = document.querySelectorAll('.CouponInputBox')[1];

    controlCouponInputs.value = couponCode;
    triggerEvent(controlCouponInputs);
    controlSubmitBtn.click();
    fireEvent('User clicked ‘Apply’ on voucher code', shared);
    setTimeout(() => {
      getCouponMsg(fireEvent, shared, onSubmit);
    }, 1000);
  } else if (targetMatched(`.${shared.ID}__cartCoupon--remove`)) {
    document.querySelector('.Cart-Coupon .Cart-HaveCoupon a').click();
  }
};

export default couponSubmitHandler;
