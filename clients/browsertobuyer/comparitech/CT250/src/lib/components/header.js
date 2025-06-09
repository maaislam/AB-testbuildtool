const header = (id, title, description) => {
  const html = `
        <div class="${id}__header">
            <div class="${id}__header-title">${title}</div>
            <div class="${id}__header-subtitle">${description}</div>
        </div>
    `;
  return html.trim();
};

export default header;
