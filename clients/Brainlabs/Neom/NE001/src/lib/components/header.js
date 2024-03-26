export const header = (ID, text, subtitle, className) => {
  const html = `
        <div class="${ID}__header ${className}">
            <h1 class="${ID}__header-title">${text}</h1>
            <p class="${ID}__header-subtitle">${subtitle}</p>
        </div>
    `;

  return html.trim();
};
