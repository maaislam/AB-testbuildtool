export const overlayButton = (id, link) => {
  const html = `
        <div class="${id}__overlay">
            <div class="lf183__btn-group">
            <button class="${id}__quick-view-btn">Quick view gallery</button>
            <button data-href="${link}" class="${id}__productLink">View Product Details</button>
             </div>
        </div>
    `;
  return html.trim();
};
