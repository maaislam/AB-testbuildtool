export const buttonWrapper = (id, mainLink) => {
  const html = `
        <div class="${id}__buttonWrapper">
            <a class="${id}__link shop-link" href="${mainLink}">SHOP NOW</a>
            <a class="${id}__link best-seller-link" href="/collections/all-products?sort=best-selling">SHOP BEST SELLERS</a>
        </div>
    `;
  return html.trim();
};
