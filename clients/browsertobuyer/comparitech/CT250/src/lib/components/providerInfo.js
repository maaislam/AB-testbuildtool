const providerInfo = (id, item, tag = '') => {
  const html = `
        <div class="${id}__provider-info ${id}__${tag}">
            <div class="${id}__text">${item.title}</div>
            ${
              item.badge
                ? `
                <div class="${id}__icon">
                    <img src="${item.badge}" alt="${item.title}" />
                </div>
                `
                : ''
            }
            
        </div>
    `;
  return html.trim();
};

export default providerInfo;
