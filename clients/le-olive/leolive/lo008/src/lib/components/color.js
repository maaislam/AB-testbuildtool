export const color = (id, item, index, perSelectedColor) => {
  const { name, imageUrl, productUrl } = item;
  const isSelected = name === perSelectedColor ? true : false;

  const html = `
    <a class="${id}__color-item ${isSelected ? `${id}__selected` : ''} ${
    index > 4 ? `${id}__hide` : ''
  }" href="${productUrl}"> 
      <img src="${imageUrl}" alt="${name}" />
    </a>
  `;
  return html;
};
