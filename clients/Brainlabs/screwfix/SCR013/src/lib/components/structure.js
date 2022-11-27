const sizeOption = (data) => {
  //eslint-disable-next-line no-restricted-syntax
  const { size, code, link } = data;

  const option = `<li><a href="${link}" data-size="${code}" >${size}</a></li>`;

  return option;
};

export const dropdownStr = (id, src, data, crossIcon) => {
  return `
    <div class="${id}__dropdown-container lg-24 md-12 cols">
        <span class="dropdown-title">SIZE</span>
        <div class="dropdown-box">
            <div class="dropdown-menu">
                <ul>
                    ${data.map((item) => item.isDelivery && sizeOption(item)).join('\n')}
                </ul>
            </div>
            <div class="${id}__errorMessage ${id}__disable">
                <div class="${id}__errorMessage-wrapper">
                    <div class="${id}__icon">${crossIcon}</div>
                    <div class="${id}__title">Please choose a size</div>
                </div>
                
        </div>
        </div>
            
    </div>
    
    `;
};

export const fakeDeliveryButon = (id) => {
  return `
    <button id="product_add_to_trolley_image" alt="Add for Delivery" title="Click here to add this item to your basket for delivery" class="btn btn--lg btn--del fill light ${id}__fakeDelivery">
        Deliver
    </button>
    `;
};
