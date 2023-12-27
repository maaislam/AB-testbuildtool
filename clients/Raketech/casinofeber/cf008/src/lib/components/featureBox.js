const featureBox = (id, data) => {
    const htmlStr = `
      <ul href='${data.productUrl}' class='${id}__featureBox'>
      </ul>`;
    return htmlStr;
};

export default featureBox;
