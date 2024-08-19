const ribbon = (ID, isRibbon) => {
  const html = `<span class="${ID}__ribbonTag" style="--set-bgColor:${isRibbon[0].colorCode}; --set-tinyColor:${isRibbon[0].tinyPortionColor}">${isRibbon[0].tag}</span>`;
  return html.trim();
};

export default ribbon;
