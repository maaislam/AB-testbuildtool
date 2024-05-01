const setDiscount = (discountCode) => {
  return fetch(`/discount/${encodeURI(discountCode)}`, {
    headers: {
      accept: '*/*'
    }
  }).then((res) => res.json());
};
export default setDiscount;
