export const uspsItem = (id, item) => {
  const { icon, text } = item;
  const html = `
    <div class="${id}__uspsItem">
      <div class="${id}__icon">
        ${icon}
      </div>
      <div class="${id}__text">
        ${text}
      </div>
    </div>`;

  return html;
};
