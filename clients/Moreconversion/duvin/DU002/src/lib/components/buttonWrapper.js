const buttonWrapper = (id, data, ind) => {
  const html = `
        <div class="${id}__buttonWrapper ${ind === 0 ? 'left-aligned' : 'right-aligned'}">
            <div class="${id}__buttonContainer">
                ${data.collections
                  .map((item) => {
                    return `
                        <div class="${id}__meta">
                            <a href="${item.url}" class="button">${item.name}</a>    
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    `;

  return html.trim();
};

export default buttonWrapper;
