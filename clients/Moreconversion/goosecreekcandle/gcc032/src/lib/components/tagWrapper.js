const tagWrapper = (id, data) => {
  const html = `
        <div class="${id}__tagWrapper">
            <div class="${id}__tagWrapper-list">
                ${data.map((item) => {
                  return `
                        <span class="${id}__item">${item}</span>
                    `;
                })}
            </div>
        </div>
    `;

  return html.trim();
};

export default tagWrapper;
