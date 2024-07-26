const discountBadge = (id, classes) => {
    const htmlStr = `<div class="${id}__discountBadge ${classes}">
        <p>Extra</p>
        <p class='bold'>10% OFF</p>
        <p>with code</p>
        <p class='bold'>style10</p>
    </div>`;
    return htmlStr;
};
export default discountBadge;
