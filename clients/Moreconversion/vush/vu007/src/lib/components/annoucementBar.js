const annoucementBar = (ID) => {
    const htmlStr = `<div class='${ID}__annoucementBar'>
        <div class='${ID}__annoucementBar-content'>420 Days Guarantee</div>
        <div class='${ID}__annoucementBar-ellipse'></div>
        <div class='${ID}__annoucementBar-content'>30 Days Money Back</div>
        <div class='${ID}__annoucementBar-ellipse'></div>
        <div class='${ID}__annoucementBar-content'>Free Shipping</div>
    </div>`;

    return htmlStr;
};
export default annoucementBar;
