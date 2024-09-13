import { excludeDuplicateOptions } from '../helpers/utils';
import { variantItem } from './variantItem';

export const variants = (id, productId, data = []) => {
  const firstVariantAvailable = data.find((variant) => variant.available);
  const modifiedData = data.map((item) => {
    const { options } = item;
    const selectedOption = options.filter((option) => option.length <= 3);
    return {
      ...item,
      appliedOption: selectedOption[0]
    };
  });

  const result = excludeDuplicateOptions(modifiedData);

  const html = `
    <div class="variant-wrapper ${id}__variant-wrapper small--text-center js" data-type="button">
        <fieldset class="variant-input-wrap" name="Size" id="ProductSelect-7846384697603">
            ${result
              .map((product) => variantItem(id, productId, firstVariantAvailable, product))
              .join('\n')}
        </fieldset>
    </div>
  `;
  return html;
};
