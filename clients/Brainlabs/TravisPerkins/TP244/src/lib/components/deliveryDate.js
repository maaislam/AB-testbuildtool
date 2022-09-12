const deliveryDate = (id, { parsedDate }, index) => {
  const preSelectedDateFromCheckout = sessionStorage.getItem(`${id}__date-selected-at-checkout`);
  const isPreSelected = parsedDate.includes(preSelectedDateFromCheckout);
  isPreSelected && sessionStorage.setItem(`${id}__selected-delivery-date`, index);

  const htmlStr = `<div class="${id}__deliverydate swiper-slide 
    ${isPreSelected ? 'selected-date' : ''}" data-dateindex="${index}">
    <div class="${id}__deliverydate--inner">${parsedDate}</div>
  </div>`;
  return htmlStr.trim();
};
export default deliveryDate;
