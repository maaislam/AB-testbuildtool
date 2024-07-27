const volumeDiscount = (id) => {
    const htmlStr = `
    <div class="${id}__volumeDiscount volume-discount">
        <label for="item-quantity">Buy more, get more off!</label>
        <input type="range" id="item-quantity" name="item-quantity" min="1" max="20" value="1">
        <div id="discount-info">
            <span>You would save <span id="discount-percentage">0%</span>!</span>
        </div>
        <button class="${id}__addToBag" id="add-to-bag">Add to Bag</button>
    </div>
    `;

    return htmlStr;
};
export default volumeDiscount;
