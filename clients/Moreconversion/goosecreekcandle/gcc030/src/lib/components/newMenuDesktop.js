export const newMenuDesktop = (id) => {
  const html = `
    <li class="${id}__newDesktopMenu">
        <a href="/collections/room-sprays" class="header-link alt-focus">Home Fragrance</a>
    </li>
  `;
  return html.trim();
};
