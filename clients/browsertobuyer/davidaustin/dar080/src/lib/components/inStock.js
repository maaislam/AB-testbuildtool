const inStock = (id) => {
    const checkInStock = localStorage.getItem('inStock') === 'true' ? 'checked' : '';
    const inStockActiveClass = localStorage.getItem('inStock') === 'true' ? 'active-toggle' : '';
    const htmlStr = `
    <div class="${id}__inStock">
        <div class="${id}__inStockText">In stock items only</div>
        <div class="toggle ${id}__toggle ${inStockActiveClass}">
            <input type="checkbox" id="mode-toggle" class="toggle__input" ${checkInStock}>
            <label for="mode-toggle" class="toggle__label"></label>
        </div>
    </div>
    `;

    return htmlStr;
};

export default inStock;
