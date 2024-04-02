export const slider = (id, item, index) => {
  const html = `
    <a class="${id}__casinoSlider-item" href="${item.casinoLink}" data-index="${index + 1}">
        <div class="${id}__casinoSlider-item-image">
            <img src="${item.imageURL}"/>       
        </div>   
    </a>
  `;
  return html.trim();
};
