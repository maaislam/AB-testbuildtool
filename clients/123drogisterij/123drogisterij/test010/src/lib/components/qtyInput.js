const qtyInput = (id, sku) => {
  const htmlStr = `
  <input data-sku="${sku}" type="number" name="qty" id="qty" value="1" title="Aantal" class="${id}__hide ${id}__fakeqty input-text qty" data-validate="{&quot;required-number&quot;:true,&quot;validate-item-quantity&quot;:{&quot;minAllowed&quot;:1,&quot;maxAllowed&quot;:10000}}">`;

  return htmlStr;
};

export default qtyInput;
