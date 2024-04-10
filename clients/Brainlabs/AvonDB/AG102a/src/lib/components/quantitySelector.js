/*eslint-disable no-useless-escape */
const quantitySelector = (id) => {
  const htmlStr = `
    <div class="${id}__quantity-wrapper">
        <span class="btn-quantity-dec ${id}__minus-btn">
            <svg width="13"
                height="3"
                viewBox="0 0 13 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line style="stroke: #212121;"
                    x1="1.28723"
                    y1="1.5"
                    x2="11.115"
                    y2="1.5"
                    stroke-width="2"
                    stroke-linecap="round"></line>
            </svg>
        </span>
        <input name="quantity"
            type="number"
            min="1"
            max="999"
            value="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            class="input-quantity">
        <span class="btn-quantity-inc ${id}__plus-btn">
            <svg width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="#212121"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.80849 1.5C7.80849 0.947715 7.36077 0.5 6.80849 0.5C6.25621 0.5 5.80849 0.947715 5.80849 1.5V5.5L1.88025 5.5C1.32796 5.5 0.880249 5.94772 0.880249 6.5C0.880249 7.05228 1.32796 7.5 1.88025 7.5L5.80849 7.5V11.5C5.80849 12.0523 6.25621 12.5 6.80849 12.5C7.36077 12.5 7.80849 12.0523 7.80849 11.5V7.5L11.708 7.5C12.2603 7.5 12.708 7.05229 12.708 6.5C12.708 5.94772 12.2603 5.5 11.708 5.5L7.80849 5.5V1.5Z">
                </path>
            </svg>
        </span>
    </div>
    `;
  return htmlStr.trim();
};
export default quantitySelector;
