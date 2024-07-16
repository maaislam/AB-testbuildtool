import { deliveryDateIcon } from '../assets/icons';
import { getDeliveryMessage } from '../helpers/utils';

export const deliveryDate = (id) => {
  const html = `
        <div class="${id}__deliveryDate">
            <div class="${id}__icon">${deliveryDateIcon}</div>
            <div class="${id}__text">
                <strong>Free 4-6 Day delivery - </strong>
                <span>${getDeliveryMessage()}</span>
            </div>
        </div>
    `;
  return html;
};
