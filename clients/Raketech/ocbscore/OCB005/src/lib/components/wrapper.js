const wrapper = (id, data) => {
  const html = `
        <div class="${id}__wrapper">
            <div class="${id}__container">
                ${data
                  .map((item) => {
                    return `
                        <div class="${id}__option">
                            <div class="${id}__label">${item.name}</div>
                            <div class="${id}__value">${item.percentage}</div>
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
            
        </div>

    `;
  return html.trim();
};

export default wrapper;
