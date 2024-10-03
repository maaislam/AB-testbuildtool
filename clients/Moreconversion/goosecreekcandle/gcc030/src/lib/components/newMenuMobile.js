const newMenuMobile = (id) => {
  const html = `
        <li class="mobile-menu-link__has-submenu ${id}__mobileMenu">
    <button type="button"
            class="alt-focus mobile-menu-link mobile-menu-sub mobile-menu-link__text type-subheading"
            data-link="1"
            aria-expanded="false">Home Fragrance</button>
</li>
    `;

  return html.trim();
};

export default newMenuMobile;
