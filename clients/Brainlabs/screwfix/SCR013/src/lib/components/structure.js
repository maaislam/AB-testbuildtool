const sizeOption = (src, data) => {
  //eslint-disable-next-line no-restricted-syntax
  let option = '';
  for (const key in data) {
    option += `<li><a href="${src}-size-${key}/${data[key].toLowerCase()}" data-size="${
      data[key]
    }" >${key}</a></li>`;
  }

  return option;
};

const dropdownStr = (id, src, data) => {
  return `
    <div class="${id}__dropdown-container lg-24 md-12 cols">
        <span class="dropdown-title">SIZE</span>
        <div class="dropdown-box">
            <div class="dropdown-menu">
                <ul>
                    ${sizeOption(src, data)}
                </ul>
            </div>
        </div>     
    </div>
    
    `;
};

export default dropdownStr;
