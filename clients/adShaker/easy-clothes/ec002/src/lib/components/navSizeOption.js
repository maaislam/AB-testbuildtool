import menuItems from './menuItems';

const navSizeOption = (id, data) => {
  const htmlStr = `

    <div class="${id}__sizenav">
        <div class="${id}__size-wrapper">
            <h5 class="d-flex align-items-center mb-0">
                <span>SIZE </span>
                <i>
                <svg
                    class="icon icon-theme-229"
                    viewBox="0 0 24 24">
                    <g>
                    <path
                        d="M11.783,14.088l-3.75-3.75c-0.117-0.13-0.176-0.28-0.176-0.449c0-0.169,0.059-0.319,0.176-0.449
                        c0.13-0.117,0.279-0.176,0.449-0.176c0.169,0,0.318,0.059,0.449,0.176l3.301,3.32l3.301-3.32c0.13-0.117,0.279-0.176,0.449-0.176
                        c0.169,0,0.318,0.059,0.449,0.176c0.117,0.13,0.176,0.28,0.176,0.449c0,0.169-0.059,0.319-0.176,0.449l-3.75,3.75
                        c-0.065,0.052-0.137,0.095-0.215,0.127c-0.078,0.033-0.156,0.049-0.234,0.049s-0.156-0.016-0.234-0.049
                        C11.919,14.183,11.847,14.14,11.783,14.088z"></path>
                    </g>
                </svg>
                </i>
            </h5>
        </div>
        ${menuItems(id, data)}
    </div>
    `;
  return htmlStr.trim();
};

export default navSizeOption;
