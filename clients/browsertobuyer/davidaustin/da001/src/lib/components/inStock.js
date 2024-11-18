const inStock = (id) => {
    const htmlStr = `
    <div class="${id}__inStock">
        <div class="${id}__inStockText">In stock items only</div>
        <div class="toggle ${id}__toggle">
            <input type="checkbox" id="mode-toggle" class="toggle__input">
            <label for="mode-toggle" class="toggle__label"></label>
        </div>
    </div>
    `;

    return htmlStr;
};

export default inStock;
