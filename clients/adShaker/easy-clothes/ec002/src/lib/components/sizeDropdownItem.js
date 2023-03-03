const sizeDropdownItem = (id, size, index) => {
  const htmlStr = `
        
    <label
        for="Filter-Size-${index + 1}"
        class="${id}__size collection-filters__checkbox input-checkbox d-flex align-items-center mb-15 mb-lg-10 cursor-pointer">
        <input type="checkbox" class="d-none" name="filter.v.option.size" 
                value="${size}"/>
        <span
            class="position-relative d-block mr-8 rounded-circle standard-color-default standard-color-${size
              .toLowerCase()
              .split(' ')
              .join('')}}"
            data-value="${size.toLowerCase().split(' ').join('')}">
            <i class="d-none standard-color-arrow">
            <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-theme-146"
                viewBox="0 0 24 24">
                <g>
                <g>
                    <path
                    d="M9.703,15.489l-2.5-2.5c-0.117-0.13-0.176-0.28-0.176-0.449c0-0.169,0.059-0.319,0.176-0.449
                        c0.13-0.117,0.28-0.176,0.449-0.176s0.319,0.059,0.449,0.176l2.051,2.07l5.801-5.82c0.13-0.117,0.28-0.176,0.449-0.176
                        s0.319,0.059,0.449,0.176c0.117,0.13,0.176,0.28,0.176,0.449c0,0.169-0.059,0.319-0.176,0.449l-6.25,6.25
                        c-0.065,0.052-0.137,0.095-0.215,0.127c-0.078,0.033-0.156,0.049-0.234,0.049s-0.156-0.016-0.234-0.049
                        C9.84,15.583,9.769,15.541,9.703,15.489z">
                    </path>
                </g>
                </g>
            </svg>
            </i> 
        </span>
        <span>${size}</span>
    </label>`;
  return htmlStr.trim();
};

export default sizeDropdownItem;
