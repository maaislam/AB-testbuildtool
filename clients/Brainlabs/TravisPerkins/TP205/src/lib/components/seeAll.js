const renderSeeAll = (id, count) => {
  const htmlStr = `
    <div div class="${id}__seefullrange">
        <div class="${id}__seefullrange--headline">${count} items available. We recommend using the <span>filters to the left</span>, or</div>
        <div class="${id}__mobfilter-btn"></div> 
        <div class="${id}__seefullrange--btn">See Full Range</div>
    </div>`;

  return htmlStr;
};

export default renderSeeAll;
