const categoryWrapper = (id, data) => {
  const { href } = window.location;
  const modifiedData = data.filter((item) => !href.includes(item.link) && item);
  console.log('🚀 ~ categoryWrapper ~ modifiedData:', modifiedData);

  const currentItem = data.find((item) => href.includes(item.link));

  const formatString = (input) => {
    const formatted = input.replace(/\bshop\b/i, '').trim();

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const topNameFallback = document.querySelector('.collection-title')?.textContent;

  const html = `
        <div class="${id}__categoryWrapper">
          <div class=" page-width page-content">
            <h1>${currentItem ? currentItem.name : topNameFallback}</h1>
            <ul class="${id}__category-list">
              ${modifiedData
                .map((item) => {
                  return `
                  <li class="${id}__item">
                    <a href="${item.link}" class="site-nav__dropdown-link site-nav__dropdown-link--top-level site-nav__dropdown-link--mega">
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
