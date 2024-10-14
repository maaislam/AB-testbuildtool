const scentWrapper = (id, data) => {
  let selected = '';
  const getUrl = new URL(window.location.href);
  if (getUrl.searchParams.get('pf_t_scent')) {
    selected = getUrl.searchParams.get('pf_t_scent');
  }
  const html = `
        <div class="${id}__scentWrapper shopify-section">
            <div class="container">
                <ul class="${id}__scentWrapper-list ${data.length > 4 ? 'custom-overflow' : ''}">
                    ${data
                      .map((item) => {
                        return `
                            <li class="${id}__scentWrapper-item ${
                          item === selected ? 'active' : ''
                        }" data-attr="${item}">${item}</li>
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
