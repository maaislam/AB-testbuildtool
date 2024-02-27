import { swatchItem } from './swatchItem';

export const swatchContainer = (ID, element) => {
  const html = `
        <fieldset class='${ID}__swatchContainer product-form__input'>
          ${[...element.querySelectorAll('input')]
            .map((item) => {
              if (item.checked) {
                return swatchItem(ID, item, true);
              }
              return swatchItem(ID, item);
            })
            .join('\n')}
        </fieldset>
        `;

  return html;
};
