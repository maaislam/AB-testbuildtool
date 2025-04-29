export const overlayButton = (id, link) => {
  const html = `
        <div class="${id}__overlay">
            <button class="${id}__quick-view-btn">Quick view gallery</button>
            <a href="${link}" class="${id}__productLink">View Product Details</a>
        </div>
    `;
  return html.trim();
};
