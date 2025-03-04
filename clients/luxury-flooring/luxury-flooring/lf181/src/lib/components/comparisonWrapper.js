import product from './product';
import stickyProduct from './stickyProduct';

const comparisonWrapper = (id, products, productType) => {
  const html = `
        <div class="${id}__comparisonWrapper">
            <div class="${id}__comparisonContainer">
                <h1 class="${id}__comparisonTitle">Compare similar products</h1>
                <div class="${id}__productsTable">
                    ${stickyProduct(id)}
                    <div class="${id}__productsWrapper">
                        ${products
                          .map((prod, index) => product(id, prod, index, productType))
                          .join('\n')}
                    </div>
                </div>
            </div>
        </div>
    `;
  return html;
};

export default comparisonWrapper;
