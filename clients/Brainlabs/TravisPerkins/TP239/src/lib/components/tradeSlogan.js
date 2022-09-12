const tradeSlogan = (id, userHasDataPoint) => {
  const htmlStr = `
    <div class="${id}__tradeslogan ${userHasDataPoint ? '' : `${id}-promote`}">
        <div class="${id}__tradeslogan--line1">DOING WHAT</div>
        <div class="${id}__tradeslogan--line2">MATTERS</div>
        <div class="${id}__tradeslogan--line3">FOR THE TRADE</div>
    </div>
    `;
  return htmlStr.trim();
};
export default tradeSlogan;
