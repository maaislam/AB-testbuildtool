export const accordionItem = (id, data) => {
  const { uid, key, body } = data;
  const html = `
    <div class="product-accordion-tab ${id}__product-accordion-tab ${key}">
        <h2 data-role="trigger" tabindex="0">
            <span>${uid}</span>
        </h2>
    </div>
    <div class="product-accordion-pane ${id}__product-accordion-pane ${key}" data-role="content" role="tabpanel" aria-hidden="true" style="display: none;">
        ${body}
    </div>
  `;
  return html;
};
