const collectionWrapper = (id, data) => {
  const html = `
    <div class="${id}__collectionWrapper">
        <div class="${id}__collectionContainer">
            <div class="${id}__collectionList">
                ${data
                  .map((item) => {
                    return `
                        <div class="${id}__collectionItem">
                            <a href="${item.link}">
                                <div class="${id}__collectionImage">
                                    <img src="${item.imageUrl}" alt="${item.title}">
                                </div>
                                <div class="${id}__collectionTitle">${item.title}</div>
                            </a>
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default collectionWrapper;
