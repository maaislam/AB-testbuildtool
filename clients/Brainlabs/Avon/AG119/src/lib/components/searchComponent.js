export const searchComponent = (ID) => {
  return `
    <div class="${ID}__container">
      <p>Search Suggestions</p>
      <ul>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1320-1324/christmas-shop/shop-by-recipient/for-her">Gifts for Her</a>
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1320-1323/christmas-shop/shop-by-recipient/for-him">Gifts for him</a> 
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1320-1325/christmas-shop/shop-by-recipient/for-kids">Gifts for kids</a>
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319/christmas-shop">Gifts</a>
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1321-1330/christmas-shop/shop-by-category/fragrance">Fragrance</a>
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1321-1328/christmas-shop/shop-by-category/skincare">Skincare</a>
        </li>
        <li>
          <a href="https://www.shopwithmyrep.co.uk/1319-1321-1329/christmas-shop/shop-by-category/bath-body">Bath & Body</a>
        </li>
      </ul>
    </div>`;
};

export const overlay = (ID) => {
  return `<div class="${ID}__overlay"></div>`;
};
