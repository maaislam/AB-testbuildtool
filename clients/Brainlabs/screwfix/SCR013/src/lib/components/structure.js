const sizeOption = (data, productName) => {
  //eslint-disable-next-line no-restricted-syntax
  const { size, id } = data;
  const link = `${productName}-size-${size}/${id}`;
  const isSelected = window.location.pathname.includes(id) ? 'selected' : '';

  const option = `<li class="${isSelected}"><a href="${link}" data-size="${id}">${size}</a></li>`;

  return option;
};

export const dropdownStr = (id, productName, data, crossIcon) => {
  return `
    <div class="${id}__dropdown-container lg-24 md-12 cols">
        <span class="dropdown-title">SIZE</span>
        <div class="dropdown-box">
            <div class="dropdown-menu">
                <ul>
                    ${data.map((item) => sizeOption(item, productName)).join('\n')}
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
