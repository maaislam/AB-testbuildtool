const product = (ID, item) => {
  const { id, text, image } = item;
  const html = `
    <div class="${ID}__item" data-id="${id}">
        <div class="${ID}__imageWrapper">
            <img src="${image}"/>
        </div>
        <div class="${ID}__text">${text}</div>
    </div>
    `;
  return html.trim();
};

export default product;
