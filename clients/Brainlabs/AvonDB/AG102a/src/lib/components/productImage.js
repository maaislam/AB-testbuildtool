const productImage = (id, data) => {
  const { imageUrls, name } = data;
  const htmlStr = `
    <div class="${id}__productimage">
        <img src="${imageUrls[0]}" alt="${name}">
    </div>
    `;

  return htmlStr.trim();
};

export default productImage;
