import { arrow, crossIcon } from '../assets/icons';

const modal = (id, data) => {
  const { text, desc, colectionName, commonText, colectionUrl, cartUrl, cartText } = data;
  const html = `
        <div class="${id}__modal">
            <div class="${id}__modal-overlay"></div>
            <div class="${id}__modal-container">
                <div class="${id}__modal-container-content">
                    <div class="${id}__promoTitle">${text}</div>
                    <div class="${id}__promoDesc">${desc}</div>
                    <a class="${id}__collectionLink btn btn--sm btn--primary" href="${colectionUrl}">
                        <span>${commonText} ${colectionName}</span>
                        ${arrow}
                    </a>
                    <a class="${id}__cartLink btn btn--sm btn--primary" href="${cartUrl}">
                        <span>${commonText} ${cartText}</span>
                        ${arrow}
                    </a>
                    <div class="${id}__closeModal ${id}__closeIcon">${crossIcon}</div>
                </div>
            </div>
        </div>
    `;
  return html;
};

export default modal;
