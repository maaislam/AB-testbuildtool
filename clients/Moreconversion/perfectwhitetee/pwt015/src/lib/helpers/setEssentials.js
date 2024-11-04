import getCollection from './getCollection';
import { isMobile } from './utils';

const setEssentials = (id, shopifySection, collectionHideDelay) => {
    getCollection('essentials').then((collection) => {
        const collectionContainer = `<div class="${id}__essentials shopify-section index-section">
          <h2 class="${id}__essentialsText ${id}__centeredTitle">shop essentials</h2>
          <div class="${id}__essentialsCollection page-width">
            ${collection.outerHTML}
          </div>
          <div class="${id}__essentialsViewAll ${id}__viewAll">View More</div>
        </div>`;

        if (!document.querySelector(`.${id}__essentials`)) {
            shopifySection.insertAdjacentHTML('afterend', collectionContainer);
        }

        setTimeout(() => {
            const visibleGridAmount = isMobile() ? 2 : 4;
            const newArrivalGrids = document.querySelectorAll(`.${id}__essentials .grid-product`);
            newArrivalGrids.forEach((grid, index) => {
                if (index > visibleGridAmount - 1) {
                    grid.classList.add(`${id}__hide`);
                }
            });
        }, collectionHideDelay);
    });
};
export default setEssentials;
