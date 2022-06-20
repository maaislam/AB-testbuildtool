const renderSeeAll = (id, count) => {
  const htmlStr = `
    <div div class="${id}__seefullrange">
        <div class="${id}__seefullrange--headline">${count} items available. We recommend using the <span class="desktop-text">filters to the left</span><span class="mobile-text">filters below</span><span class="desktop-or">, or</span></div>
        <div class="${id}__mobfilter-btn"></div>
        <div class="mobile-or">or</div> 
        <div class="${id}__seefullrange--btn">See Full Range</div>
    </div>`;

  return htmlStr;
};

export default renderSeeAll;
