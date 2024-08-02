export const freeWarranty = (id, icon, text) => {
  const html = `
        <div class="${id}__freeWarranty">
            <div class="${id}__icon">${icon}</div>
            <div class="${id}__text">${text}</div>
        </div>
    `;

  return html;
};
