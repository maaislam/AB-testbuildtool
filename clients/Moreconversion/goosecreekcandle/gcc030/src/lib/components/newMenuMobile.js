const newMenuMobile = (id) => {
  const html = `
        <li class="mobile-menu-link__has-submenu ${id}__mobileMenu">
            <a class="alt-focus mobile-menu-link mobile-menu-link__text type-subheading" data-link="4" href="/collections/room-sprays" tabindex="-1">
               Home Fragrance
            </a>
        </li>
    `;

  return html.trim();
};

export default newMenuMobile;
