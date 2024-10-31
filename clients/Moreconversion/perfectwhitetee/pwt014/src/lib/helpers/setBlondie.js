import getCollection from './getCollection';
import { isMobile } from './utils';

const setBlondie = (id, shopifySection, collectionHideDelay) => {
    getCollection('blondie-1').then((collection) => {
        const collectionContainer = `<div class="${id}__blondie shopify-section index-section">
          <h2 class="${id}__blondieText ${id}__centeredTitle">blondie essentials</h2>
          <div class="${id}__blondieCollection page-width">
            ${collection.outerHTML}
          </div>
          <div class="${id}__blondieViewAll ${id}__viewAll">View More</div>
        </div>`;

        if (!document.querySelector(`.${id}__blondie`)) {
            shopifySection.insertAdjacentHTML('afterend', collectionContainer);
        }

        setTimeout(() => {
            const visibleGridAmount = isMobile() ? 2 : 4;
            const blondieGrids = document.querySelectorAll(`.${id}__blondie .grid-product`);
            blondieGrids.forEach((grid, index) => {
                //without first 4 grids add a hide class for other grids
                if (index > visibleGridAmount - 1) {
                    grid.classList.add(`${id}__hide`);
                }
            });
        }, collectionHideDelay);
    });
};
export default setBlondie;
