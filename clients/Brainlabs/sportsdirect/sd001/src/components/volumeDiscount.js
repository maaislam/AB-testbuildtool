const volumeDiscount = (id) => {
    const htmlStr = `
    <div class="${id}__volumeDiscount volume-discount">
        <label for="item-quantity">Buy more, get more off!</label>
        <div class="quantity-range">
            <span>2-5</span>
            <span>6-10</span>
            <span>11-20</span>
            <span>20</span>
        </div>
        <input type="range" id="item-quantity" name="item-quantity" min="1" max="20" value="1">
        <div id="discount-info">
            <span>You would save <span id="discount-percentage">0%</span>!</span>
            <input type="text" id="quantity-display" value="1" disabled>
        </div>
        <button class="${id}__addToBag" id="add-to-bag">Add to Bag</button>
    </div>
    `;

    return htmlStr;
};
export default volumeDiscount;
