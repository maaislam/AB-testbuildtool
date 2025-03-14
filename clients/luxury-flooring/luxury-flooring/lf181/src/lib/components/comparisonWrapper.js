import { product, productMobile } from './product';
import stickyProduct from './stickyProduct';

export const comparisonWrapper = (id, products) => {
  const html = `
        <div class="${id}__comparisonWrapper">
            <div class="${id}__comparisonContainer">
                <h1 class="${id}__comparisonTitle">Compare similar products</h1>
                <div class="${id}__productsTable">
                    ${stickyProduct(id, products)}
                    <div class="${id}__productsWrapper">
                        ${products.map((prod) => product(id, prod)).join('\n')}
                    </div>
                </div>
            </div>
        </div>
    `;
  return html;
};

export const comparisonWrapperMobile = (id, products) => {
  const html = `
        <div class="${id}__comparisonWrapper ${id}__comparisonWrapperMobile">
            <div class="${id}__comparisonContainer">
                <h1 class="${id}__comparisonTitle">Compare similar products</h1>
                <div class="${id}__productsTable">
                    <div class="${id}__productsWrapper ${id}__sticky">
                        ${productMobile(id, products[0])}
                    </div>
                    <div class="swiper ${id}__swiper ${id}__productsWrapper">
                      <div class="swiper-wrapper">
                          ${products
                            .slice(1)
                            .map((prod) => productMobile(id, prod, 'swipe'))
                            .join('\n')}
                      </div>
                      <div class="swiper-pagination ${id}__pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html;
};
