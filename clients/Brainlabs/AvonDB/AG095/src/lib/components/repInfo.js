const repInfo = (id, repName) => {
  const htmlStr = `<div class="${id}__repname">
        <div class="title"><span class="prefix">You're shopping with </span><span class="suffix">${
          repName || ''
        }</span></div>
        <div class="subtitle ${id}__invisible">Shop more brochures</div>
    </div>`;
  return htmlStr;
};

export default repInfo;
