const scentWrapper = (id, data) => {
  const html = `
        <div class="${id}__scentWrapper shopify-section">
            <div class="container">
                <ul class="${id}__scentWrapper-list ${data.length > 4 ? 'custom-overflow' : ''}">
                    ${data
                      .map((item) => {
                        return `
                            <li class="${id}__scentWrapper-item" data-attr="${item}">${item}</li>
                        `;
                      })
                      .join('\n')}
                </ul>
            </div>
        </div>
    `;
  return html.trim();
};

export default scentWrapper;
