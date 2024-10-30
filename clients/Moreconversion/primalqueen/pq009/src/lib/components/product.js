const product = (id, data) => {
  const { comparePrice, sellPrice, url } = data;
  const html = `
    <div class="${id}__productWrapper">
        <div class="${id}__productContainer">
            <div class="${id}__image">
                <img src="https://primalqueen.com/cdn/shop/files/1.png?v=1696349447&width=300"/>
            </div>
            <div class="${id}__info">
                <div class="${id}__text">1 Month Subscribe & Save</div>
                <div class="${id}__price">
                    <span class="${id}__sellPrice">${sellPrice}</span>
                    <span class="${id}__ComparePrice">${comparePrice}</span>
                </div>
            </div>
            <a href="${url}" class="${id}__button">Add</a>
        </div>
    </div>
  `;
  return html.trim();
};

export default product;
