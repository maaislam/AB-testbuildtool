const sizeOption = (data, productName) => {
  //eslint-disable-next-line no-restricted-syntax
  const { size, id } = data;
  const link = `${productName}-size-${size}/${id}`;
  const isSelected = window.location.pathname.includes(id) ? 'selected' : '';

  const option = `<li class="${isSelected}"><a href="${link}" data-size="${id}">${size}</a></li>`;

  return option;
};

export const dropdownStr = (id, productName, variants) => {
  return `
    <div class="${id}__dropdown-container lg-24 md-12 cols">
        <span class="dropdown-title">SIZE</span>
        <div class="dropdown-box">
            <div class="dropdown-menu">
                <ul>
                    ${variants.map((item) => sizeOption(item, productName)).join('\n')}
                </ul>
            </div>
        </div>
        </div>
            
    </div>
    
    `;
};
