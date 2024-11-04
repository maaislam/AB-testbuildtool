import getCollection from './getCollection';
import { isMobile } from './utils';

const setNewArrivals = (id, shopifySection, collectionHideDelay) => {
    getCollection('new-arrivals').then((collection) => {
        const collectionContainer = `<div class="${id}__newArrivals shopify-section index-section">
          <h2 class="${id}__newArrivalsText ${id}__centeredTitle">new arrivals</h2>
          <div class="${id}__newArrivalsCollection page-width">
            ${collection.outerHTML}
          </div>
          <div class="${id}__newArrivalsViewAll ${id}__viewAll">View More</div>
        </div>`;

        if (!document.querySelector(`.${id}__newArrivals`)) {
            shopifySection.insertAdjacentHTML('beforebegin', collectionContainer);
        }

        setTimeout(() => {
            const visibleGridAmount = isMobile() ? 2 : 4;
            const newArrivalGrids = document.querySelectorAll(`.${id}__newArrivals .grid-product`);
            newArrivalGrids.forEach((grid, index) => {
                //without first 4 grids add a hide class for other grids
                if (index > visibleGridAmount - 1) {
                    grid.classList.add(`${id}__hide`);
                }
            });
        }, collectionHideDelay);
    });
};
export default setNewArrivals;
