const ribbon = (ID, isRibbon) => {
  const html = `<div class="${ID}__ribbonWrapper">
                  <span class="${ID}__ribbonTag" style="--set-bgColor:${isRibbon[0].colorCode}; --set-tinyColor:${isRibbon[0].tinyPortionColor}">
                  ${isRibbon[0].tag}
                  </span>
                </div>`;
  return html.trim();
};

export default ribbon;
