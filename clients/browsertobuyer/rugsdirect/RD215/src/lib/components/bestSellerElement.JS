const bestSellerElement = (ID) => {
  const html = `
      <li class="navmenu-item navmenu-basic__item ${ID}__bestSellers">
        <a class="
            navmenu-link
            navmenu-link-depth-1
            hover:text-underline hover:text-brandPurple
            " href="/collections/best-selling"><span>Bestsellers</span>
        </a>
      </li>
    `;
  return html.trim();
};

export default bestSellerElement;
