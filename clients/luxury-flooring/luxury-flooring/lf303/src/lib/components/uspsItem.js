export const uspsItem = (id, data) => {
  const { imageUrl, text } = data;
  const html = `
        <div class="${id}__uspsItem">
            <div class="${id}__icon">
                <img  src="${imageUrl}"/>
            </div>
            <div class="${id}__text">${text}</div>
        </div>
  `;
  return html;
};
