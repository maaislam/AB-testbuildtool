const featureBox = (id, data, index) => {
    const htmlStr = `
      <li class='${id}__featureBox'>
        <span class='${id}__featureBox-header'>${Object.keys(data)[index]}</span>
        <span class='${id}__featureBox-content'>${Object.values(data)[index]}</span>
      </li>`;
    return htmlStr;
};

export default featureBox;
