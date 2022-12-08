export const cartIcon = (id) => {
  return `
    <div class="${id}__cart-button">
        <span class="${id}__plus-icon">
            <svg version="1.1" viewBox="0 0 14 14" aria-hidden="true" class="svg-inline--bi bi-plus bi-lg bi-hide" data-test="icon-plus" focusable="false"><path fill-rule="evenodd" d="M7.5 8v3.51A.5.5 0 017 12a.492.492 0 01-.5-.49V8H2.99a.5.5 0 01-.49-.5c0-.276.215-.5.49-.5H6.5V3.49A.5.5 0 017 3c.276 0 .5.215.5.49V7h3.51a.5.5 0 01.49.5c0 .276-.215.5-.49.5H7.5z"></path></svg>
        </span>
        </svg>
        <span class="${id}__cart-icon">
            <i class="fas fa-shopping-cart"></i>
        </span>
        </svg>
    </div>
    `;
};
