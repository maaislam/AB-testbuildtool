/*eslint-disable no-useless-escape */
const quantitySelector = (id) => {
  const htmlStr = `
    <div class="${id}__quantity_wrapper">
        <span class="btn-quantity ${id}__minus-btn">
            <svg aria-hidden="true" class="icon-minus" viewBox="0 0 20 20"><path fill="#444" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg>
        </span>
        <input name="quantity"
            type="number"
            min="1"
            max="999"
            value="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            class="input-quantity">
        <span class="btn-quantity-inc ${id}__plus-btn">
            <svg aria-hidden="true" class=" icon-plus" viewBox="0 0 20 20"><path fill="#444" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg>
        </span>
    </div>`;

  return htmlStr.trim();
};

export default quantitySelector;
