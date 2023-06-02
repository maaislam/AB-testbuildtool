const qtyInput = (id, qty) => {
  const htmlStr = `
  <input type="number" name="qty" id="qty" value="${qty}" title="Aantal" class="${id}__hide ${id}__fakeqty input-text qty" data-validate="{&quot;required-number&quot;:true,&quot;validate-item-quantity&quot;:{&quot;minAllowed&quot;:1,&quot;maxAllowed&quot;:10000}}">`;

  return htmlStr;
};

export default qtyInput;
