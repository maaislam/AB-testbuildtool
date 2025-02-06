import { closeIcon } from '../assets/icons';

const modal = (id) => {
  const html = `
    <div class="${id}__modal">
        <div class="${id}__modal-overlay"></div>
        <div class="${id}__modal-container" tabindex="-1" role="dialog" aria-modal="false" aria-label="Product Details">
            <div class="${id}__modal-header">
                <div class="${id}__mainTitle">Quick Add</div>
                <div class="${id}__closeWrapper" tabindex="0">
                    ${closeIcon}
                </div>
            </div>
            <div class="${id}__modal-content">
              <div class="${id}__productsInfo">
                <div class="${id}__image">
                  <img src=""/>
                </div>
                
              </div>
            </div>
        </div>
    </div>
    `;
  return html.trim();
};

export default modal;
