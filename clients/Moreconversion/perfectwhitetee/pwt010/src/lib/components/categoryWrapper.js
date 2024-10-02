const categoryWrapper = (id, data) => {
  const { href } = window.location;
  const modifiedData = data.filter((item) => !href.includes(item.link) && item);

  const html = `
        <div class="${id}__categoryWrapper">
          <div class="page-width">
            <h1>All tops</h1>
            <ul class="${id}__category-list">
              ${modifiedData
                .map((item) => {
                  return `
                  <li class="${id}__item">
                    <a href="${item.link}">${item.name}</a>
                  </li>
                `;
                })
                .join('\n')}
            </ul>
          </div>
        </div>
    `;
  return html.trim();
};

export default categoryWrapper;
