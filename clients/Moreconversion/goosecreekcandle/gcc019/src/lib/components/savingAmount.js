export const savingAmount = (id, discount) => {
  const html = `
        <li class="${id}__savingAmount">
            <span>${discount}% Off</span>
        </li>
    `;
  return html;
};
