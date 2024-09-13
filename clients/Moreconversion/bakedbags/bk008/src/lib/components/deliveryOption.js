import { deliveryOptionsIcon, downArrow } from '../assets/icons';

export const deliveryOptions = (id, data) => {
  const html = `
        <div class="${id}__deliveryOptionsWrapper">
            <div class="${id}__icon">${deliveryOptionsIcon}</div>
            <div class="${id}__message">Delivering to&nbsp;</div>
            <div class="${id}__content">
                <div class="${id}__title">
                    <div class="${id}__text">New York, NY</div>
                    <div class="${id}__arrow">${downArrow}</div>
                </div>
                <div class="${id}__options">
                        ${data
                          .map((item) => {
                            return `
                                <div class="${id}__item">${item}</div>
                            `;
                          })
                          .join('\n')}
                    
                </div>
            </div>
        </div>
    `;
  return html;
};
