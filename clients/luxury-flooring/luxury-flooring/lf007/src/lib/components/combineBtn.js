const combineBtn = (id) => {
    const htmlStr = `<div class="${id}__hide ${id}__stickyATC">
        <div class="${id}__atcBtnWrapper">
            <button class="${id}__atcBtn" type="button">Add to Basket</button>
        </div>
        <div class="${id}__orderSampleWrapper">
            <button class="${id}__orderSampleBtn" type="button">Order a sample</button>
        </div>
    </div>`;
    return htmlStr;
};
export default combineBtn;
