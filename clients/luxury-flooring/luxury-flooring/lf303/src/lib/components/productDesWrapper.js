export const productDesWrapper = (id, data) => {
  const html = `
    <div class="${id}__productDesWrapper">
        <h2 class="${id}__title">Product Description</h2>
        <ul class="${id}__content">
            ${data
              .map((item) => {
                return `
                    <li class="${id}__item">${item.text}</li>
                `;
              })
              .join('\n')}
        </ul>
        <p class="${id}__subtitle">Order your free sample and create the cosy space of your dreams today!</p>
    </div>
  `;
  return html;
};
