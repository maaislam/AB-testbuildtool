const designWrapper = (id, data) => {
  const { pathname } = window.location;

  const html = `
    <div class="${id}__designWrapper">
        <div class="${id}__designWrapper-text">Request a Design</div>
        <div class="${id}__designWrapper-items">
            ${data
              .map((item) => {
                return `
                    <a class="${id}__designWrapper-item ${
                  item.path === pathname ? 'active' : ''
                }" href="${item.path}">
                        <span class="${id}__designWrapper-item-image">
                            <img src="${item.imageUrl}"/>
                        </span>
                        <span class="${id}__designWrapper-item-title">${item.title}</span>
                    </a>
                `;
              })
              .join('\n')}    
        </div>
    </div>
  `;
  return html.trim();
};

export default designWrapper;
