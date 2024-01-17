export const list = (item, ID) => {
  const { svg, text } = item;
  const html = `
        <li class="${ID}__item">
            ${svg}
            <p class="${ID}__itemText">${text}</p>
        </li>
    `;

  return html.trim();
};
