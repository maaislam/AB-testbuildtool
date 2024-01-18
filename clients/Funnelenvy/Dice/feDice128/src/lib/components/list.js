export const list = (item, ID) => {
  const { icon, text } = item;
  const html = `
        <li class="${ID}__item">
            <div class='${ID}__itemIcon'>${icon}</div>
            <p class="${ID}__itemText">${text}</p>
        </li>
    `;

  return html.trim();
};
