const feLabel = (id, imgData) => {
  const { href, src, title } = imgData;
  const htmlStr = `
    <a class="${id}__labellink" href="${href}" target="_blank">
        <img title="${title}" src="${src}">
    </a>
    `;
  return htmlStr.trim();
};

export default feLabel;
