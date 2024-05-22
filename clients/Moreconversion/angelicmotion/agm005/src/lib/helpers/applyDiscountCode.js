const applyDiscountCode = (discountCode) => {
  fetch(`/discount/${discountCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Discount code application failed');
      }
      return response;
    })
    .then((data) => {
      console.log('Discount code applied:', data);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error applying discount code:', error);
    });
};

export default applyDiscountCode;
