const atcBtn = (id) => {
  const html = `
        <button type="button" class="btn btn--full add-to-cart ${id}__atcBtn">
            <span data-add-to-cart-text=""
                data-default-text="Add to cart">Add to cart</span>
        </button>
    `;
  return html;
};

export default atcBtn;
