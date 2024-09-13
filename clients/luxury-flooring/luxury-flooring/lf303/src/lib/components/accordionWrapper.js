import { accordionItem } from './accordionItem';

export const accordionWrapper = (id, data) => {
  const html = `
    <section class="product-section accfeat ${id}__product-section">
        <div class="product-accordion ${id}__product-accordion">
            <div class="product-accordion-tabs mage-accordion-disabled" role="tablist">
                ${data.map((item) => accordionItem(id, item)).join('\n')}
            </div>
        </div>
    </section>
  `;
  return html;
};
