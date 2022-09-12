const productTitle = (id, name) => {
  const htmlStr = `
    <div class="${id}__producttitle">
        <span>${name}</span>
    </div>
  `;
  return htmlStr.trim();
};

export default productTitle;
