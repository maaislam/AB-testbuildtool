const button = (ID, icon, text, className) => {
  const html = `
        <button class="${ID}__button-wrapper ${className}">
            <span class="${ID}__button-icon">${icon}</span>
            <span class="${ID}__button-text">${text}</span>
        </button>
    `;
  return html;
};

export default button;
