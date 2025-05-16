import { crossIcon } from '../assets/icons';

const modal = (id) => {
  const html = `
    <div class="${id}__modal">
        <div class="${id}__modal-overlay"></div>
        <div class="${id}__modal-container">
            <div class="${id}__modal-header">
                <div class="${id}__closeWrapper">
                    ${crossIcon}
                </div>
            </div>
            <div class="${id}__modal-content">
            
            </div>
        </div>
    </div>
    `;
  return html.trim();
};

export default modal;
