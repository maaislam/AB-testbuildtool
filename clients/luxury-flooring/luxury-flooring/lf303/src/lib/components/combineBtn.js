const combineBtn = (id) => {
  const htmlStr = `<div class="${id}__hide ${id}__stickyATC">
        <div class="${id}__atcBtn">Add to basket</div>
        <div class="${id}__orderSampleWrapper">
            <button class="${id}__orderSampleBtn" type="button">Order a free sample</button>
        </div>
    </div>`;
  return htmlStr;
};
export default combineBtn;
