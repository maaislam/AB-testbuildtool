export const addToCard = (id, data) => {
  const html = `
    <form method="post" action="/cart/add" id="product-form-template--15057118789766__main" accept-charset="UTF-8" class="form ${id}__atcForm" enctype="multipart/form-data" novalidate="novalidate" data-type="add-to-cart-form">
        <input type="hidden" name="form_type" value="product">
        <input type="hidden" name="utf8" value="✓"><input type="hidden" name="id" value="${
          data && data.id ? data.id : null
        }" class="product-variant-id">
        <div class="product-form__buttons">
            <button id="ProductSubmitButton-template--15057118789766__main" type="submit" name="add" class="product-form__submit button button--full-width button--primary" aria-haspopup="dialog" ${
              !data ? 'disabled' : ''
            }>
                <span>${data ? 'ADD TO CART' : 'SOLD OUT'}</span>
                <div class="loading-overlay__spinner hidden">
                    <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            </button>
        </div>
    </form>
    `;

  return html;
};
