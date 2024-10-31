const collectionWrapper = (id, data) => {
  const html = `
        <div class="${id}__collection-wrapper">
            <div class="${id}__collectionContainer">
                ${data
                  .map((item) => {
                    return `
                        <a class="${id}__collection-item" href="${item.url}">
                            <div class="${id}__image-wrapper"><img src="${item.image}" alt="${item.name}"></div>
                            <h2>${item.name}</h2>
                        </a>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    `;
  return html.trim();
};

export default collectionWrapper;
