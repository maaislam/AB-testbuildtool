export const uspsWrapper = (id, data) => {
  const html = `
        <div class="${id}__uspsWrapperContainer">
            <div class="${id}__uspsWrapper">
                ${data
                  .map((item) => {
                    return `
                        <a class="${id}__item" href="${item.url}">
                            <div class="${id}__icon">${item.icon}</div>
                            <div class="${id}__text">${item.title}</div>
                        </a>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    `;
  return html.trim();
};
