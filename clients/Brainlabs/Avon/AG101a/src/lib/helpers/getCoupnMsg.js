const getCouponMsg = (fireEvent, shared, onSubmit) => {
  const isCouponApplied = !document.querySelector('.Cart-HaveCoupon').classList.contains('ng-hide');
  //console.log('isCouponApplied', isCouponApplied);
  const couponMsgContainer = !isCouponApplied
    ? document.querySelector('#CouponCode')
    : document.querySelector('.Cart-CouponPromotionMessage');
  const couponMsg = (couponMsgContainer?.innerText || '').trim();

  const couponCode = document.querySelector(
    `.${isCouponApplied ? 'Cart-HaveCoupon' : 'Cart-NoCoupon'} input`
  ).value;

  if (onSubmit && isCouponApplied) {
    fireEvent('User successfully applied voucher code', shared);
  } else if (onSubmit && !isCouponApplied) {
    fireEvent('User received error after applying voucher code', shared);
  }

  return {
    isCouponApplied,
    couponMsg,
    couponCode
  };
};
export default getCouponMsg;
