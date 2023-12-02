import { product } from './product';

export const prodsStructure = (ID, products) => {
    const htmlStr = `
    <ol class="${ID}__grid__item product-grid" id="template--collection">
       ${products.map((item) => product(ID, item)).join('\n')}
    </ol>
    `;

    return htmlStr.trim();
};
