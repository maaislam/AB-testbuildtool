import { pollerLite } from '../../../../../../../globalUtil/util';

const saleProducts = (id) => {
    pollerLite(['[data-testid="productGrid"]'], () => {
        console.log('products found');
        document.querySelectorAll('.product-card').forEach((item) => {
            if (item.querySelector('[data-test-id="old-price"]')) {
                console.log('itemssss');
                item.classList.add(`${id}__sale-item`);
            }
        });
    });
};

export default saleProducts;
