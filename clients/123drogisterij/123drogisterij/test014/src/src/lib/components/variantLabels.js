/*eslint-disable no-param-reassign */
import variantlabel from './variantLabel';

const variantLabels = (id, variants, sku) => {
  const highestSaver = variants.reduce((acc, curr) => {
    if (acc < curr.saving) {
      acc = curr.saving;
    }
    return acc;
  }, 0);
  const htmlStr = `
        <div class="${id}__variants" data-active-sku="${sku}" >
            <div class="${id}__variants-label">
                <strong>Kies uw voordeel:</strong>
            </div>
            ${variants.map((variant) => variantlabel(id, variant, highestSaver)).join('\n')}
        </div>`;
  return htmlStr;
};
export default variantLabels;
