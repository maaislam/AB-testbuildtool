export const slider = (id, item, index) => {
  const html = `
  <div>
    <a class="${id}__casinoSlider-item" href="${item.casinoLink}" data-index="${index + 1}">
       <img src="${item.imageURL}"/>
    </a>
  </div>
   
  `;
  return html.trim();
};
