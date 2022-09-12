import ProductItem from './prodItem';
import suggestedProd from './suggestedProd';

export const searchStructureDesktop = (id, products, suggestedProducts, countryName) => {
  const desktop = `
  <div class="${id}__searchStructure">
    <div class="${id}__p-search-dropdown">
      <div class="${id}__p-search-dropdown-panel">
          <div class="${id}__p-search-dropdown-columns">

              <div class="p-search-dropdown-column p-search-dropdown-column--products js-column-products ${id}__suggestedProducts">
                  <div class="p-search-dropdown-section">
                      <span class="p-search-dropdown-section-title">Suggested Products</span>

                      ${
                        suggestedProducts &&
                        suggestedProducts.map((item) => suggestedProd(item, countryName)).join('\n')
                      }
                  </div>
              </div>

              <div class="p-search-dropdown-column p-search-dropdown-column--text js-column-text ${id}__popularProducts">

                  <div class="p-search-dropdown-section">
                      <span class="p-search-dropdown-section-title">POPULAR SEARCHES:</span>
                      ${
                        products &&
                        products.map((item) => ProductItem(item, countryName)).join('\n')
                      }
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
    `;
  return desktop;
};
export const searchStructureMobile = (id, products, suggestedProducts, countryName) => {
  return `
    <div class="${id}__searchStructureMobile">
      <div class="${id}__p-search-dropdownMobile">
        <div class="${id}__p-search-dropdown-panelMobile">
            <div class="${id}__p-search-dropdown-columnsMobile">
  
                <div class="p-search-dropdown-column p-search-dropdown-column--products js-column-products ${id}__suggestedProducts">
                    <div class="p-search-dropdown-section">
                        <span class="p-search-dropdown-section-title">Suggested Products</span>
                        ${
                          suggestedProducts &&
                          suggestedProducts
                            .map((item) => suggestedProd(item, countryName))
                            .join('\n')
                        }
                    </div>
                </div>
  
                <div class="p-search-dropdown-column p-search-dropdown-column--text js-column-text ${id}__popularProducts">
                    <div class="p-search-dropdown-section">
                        <span class="p-search-dropdown-section-title">POPULAR SEARCHES:</span>
                        ${
                          products &&
                          products
                            .slice(0, 5)
                            .map((item) => ProductItem(item, countryName))
                            .join('\n')
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
      `;
};
