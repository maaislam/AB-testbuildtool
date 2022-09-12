const suggestedProd = (item, countryName) => {
  const { title, url, newPrice, oldPrice, thumbnail } = item;
  const htmlStr = `
    <a class="p-search-dropdown-product"
    href="https://eu.puma.com${countryName}en/${url}">
     <img class="p-search-dropdown-product-image"
          src="${thumbnail}">
     <div class="p-search-dropdown-product-texts">
            <div class="p-search-dropdown-product-title">${title}</div>
         <div class="p-search-dropdown-product-prices">
             <div class="p-search-dropdown-product-price ${
               newPrice && oldPrice ? 'PUMA-863__red' : 'PUMA-863__black'
             }">
                 ${newPrice}
             </div>
             <div class="p-search-dropdown-product-old-price ${
               oldPrice ? 'PUMA-863__visible' : 'PUMA-863__hidden'
             }">

             ${oldPrice}
                 
             </div>
         </div>
     </div>
 </a>
    
    `;

  return htmlStr;
};

export default suggestedProd;
