export const bestSeller = (id, type) => {
  const htmlDesktop = `
        <li class="dropdown-submenu ${id}__menu-link ${id}__${type}">
            <a href="#" aria-expanded="false">
                Best Sellers           
            </a>        
        </li>
  `;

  const htmlMobile = `
        <li class="${id}__menu-link ${id}__${type}">   
            <a class="alt-focus mobile-menu-link mobile-menu-link__text type-subheading" href="#">
                Best Sellers
            </a>      
        </li>
    `;

  const mainhtml = type === 'desktop' ? htmlDesktop : htmlMobile;

  return mainhtml;
};
