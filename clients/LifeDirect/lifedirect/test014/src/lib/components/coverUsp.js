const coverUsp = (id, coverdata) => {
  //console.log(coverdata);
  const { uspData, uspTick, coverType } = coverdata;
  const htmlStr = `
    <div class="${id}__coverusp" data-covertype="${coverType}">
        <span class="${id}__coverusp--icon">${uspTick}</span>
        <span class="${id}__coverusp--text">${uspData}</span>
    </div>
  `;
  return htmlStr.trim();
};

export default coverUsp;
