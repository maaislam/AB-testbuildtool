const categoryWrapper = (id, data) => {
  const { href } = window.location;
  const currentItem = data.find((item) => href.includes(item.link));

  const html = `
        <div class="${id}__categoryWrapper">
          <div class=" page-width page-content">
            <ul class="${id}__category-list">
              ${data
                .map((item) => {
                  return `
                  <li class="${id}__item ${
                    currentItem && currentItem.name === item.name ? 'selected' : ''
                  }">
                    <a href="${
                      item.link
                    }" class="site-nav__dropdown-link site-nav__dropdown-link--top-level site-nav__dropdown-link--mega">
                      <div class="${id}__imageWrapper"><img src="${
                    item.imgSrc
                  }" alt="category_image"/></div>
                      <span class="megamenu__link-label">${item.name}</span>
                    </a>
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
