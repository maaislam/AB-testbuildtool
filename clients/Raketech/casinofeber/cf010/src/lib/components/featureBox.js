const featureBox = (id, data) => {
    const htmlStr = `
      <li class='${id}__featureBox'>
        <span class='${id}__featureBox-header'>${Object.keys(data)}</span>
        <span class='${id}__featureBox-content'>${Object.values(data)}</span>
      </li>`;
    return htmlStr;
};

export default featureBox;
