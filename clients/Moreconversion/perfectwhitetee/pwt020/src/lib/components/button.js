const button = (id) => {
  const html = `
        <button id="AddToCart" class="btn btn--inverse btn--full add-to-cart ${id}__atb">
      <span data-add-to-cart-text="" data-default-text="add to bag">
        add to bag
      </span>
    </button>
    `;
  return html.trim();
};

export default button;
