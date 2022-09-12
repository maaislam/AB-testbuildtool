const newCoupon = (id, couponData) => {
  //console.log('coupon data', couponData);
  const { isCouponApplied, couponMsg, couponCode } = couponData;
  const couponBtn = !isCouponApplied
    ? `<a class="${id}__cartCoupon--button vi-btn"><span>Apply</span></a>`
    : `<a class="${id}__cartCoupon--remove"><span>x remove</span></a>`;

  const htmlStr = `<div class="${id}__cartCoupon">
    <form class="${id}__cartCoupon--form">
        <input maxlength="49"
                ${isCouponApplied ? 'readonly="readonly"' : null}
               class="${id}__cartCoupon--input"
               type="text"
               placeholder='Enter Voucher Code'
               value="${couponCode || ''}">
        ${couponBtn}
    </form>
    <div class="${id}__cartCoupon--promoMessage ${isCouponApplied ? '' : 'fail'}">
    ${couponMsg || ''}
    </div>
</div>`;

  return htmlStr.trim();
};

export default newCoupon;
