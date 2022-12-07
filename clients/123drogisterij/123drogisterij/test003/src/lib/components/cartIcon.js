export const cartIcon = (id) => {
  return `
    <div class="${id}__cart-button">
        <span class="${id}__plus-icon">
            <svg version="1.1" viewBox="0 0 14 14" aria-hidden="true" class="svg-inline--bi bi-plus bi-lg bi-hide" data-test="icon-plus" focusable="false"><path fill-rule="evenodd" d="M7.5 8v3.51A.5.5 0 017 12a.492.492 0 01-.5-.49V8H2.99a.5.5 0 01-.49-.5c0-.276.215-.5.49-.5H6.5V3.49A.5.5 0 017 3c.276 0 .5.215.5.49V7h3.51a.5.5 0 01.49.5c0 .276-.215.5-.49.5H7.5z"></path>
        </span>
        </svg>
        <span class="${id}__cart-icon">
            <svg version="1.1" viewBox="0 0 24 24" aria-hidden="true" class="svg-inline--bi bi-basket bi-lg" data-test="icon-basket" focusable="false"><path d="M23.9 6.5c0-.8-.7-1.5-1.5-1.5H5.8l-1-4H1c-.6 0-1 .4-1 1s.4 1 1 1h2.2L4 6.2l2.9 11.6c-.5.6-.9 1.4-.9 2.2 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.4-.1-.7-.2-1h4.4c-.1.3-.2.6-.2 1 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.9-.4-1.6-.9-2.2l2.7-11c0-.1.1-.2.1-.3zM10 20c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm9 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm.2-4H8.8L6.3 7h15.4l-2.5 10z"></path>
        </span>
        </svg>
    </div>
    `;
};
