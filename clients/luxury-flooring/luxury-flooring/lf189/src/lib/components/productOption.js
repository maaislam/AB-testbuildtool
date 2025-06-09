export const productOption = (id, item) => {
  const { label, options } = item;
  const html = `
        <div class="${id}__product-option" data-id="${item.id}">
            <span>${label}</span>
            <select>
                <option value="">Choose an Option...</option>
                ${options
                  .map(
                    (option) =>
                      `<option value="${option.id}" data-products='${JSON.stringify(option)}'>${
                        option.label
                      }</option>`
                  )
                  .join('\n')}
            </select>
        </div>
    `;
  return html.trim();
};
