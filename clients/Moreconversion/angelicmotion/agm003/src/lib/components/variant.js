export const variant = (id, index, item, isAvailable) => {
  const isSeleced = isAvailable && item.id === isAvailable.id ? `${id}__selected` : '';
  const isStockout = !item.available ? `${id}__stockout` : '';
  const html = `
        <li class="${id}__variant ${isSeleced} ${isStockout}" 
         data-prodid="${item.id}">
            ${item.title}
         </li>
    `;
  return html;
};
