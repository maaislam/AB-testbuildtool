const atcBtn = (id) => {
    const htmlStr = `<button type="button" class="btn btn--full add-to-cart ${id}__atc-btn">
        <span data-add-to-cart-text="" data-default-text="Add to cart">Add to cart</span>
    </button>`;

    return htmlStr;
};
export default atcBtn;
