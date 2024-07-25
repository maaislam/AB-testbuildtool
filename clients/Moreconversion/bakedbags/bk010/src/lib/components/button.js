export const button = (id) => {
  const html = `
         <button type="button" name="add" data-quantity="1" class="btn button-light">
            <span class=" js">Add to Cart</span>
            <img src="https://cdn.shopify.com/s/files/1/0556/4334/0963/files/cart_color.svg?v=1698522599" class=" js">
        </button>
    `;
  return html;
};
