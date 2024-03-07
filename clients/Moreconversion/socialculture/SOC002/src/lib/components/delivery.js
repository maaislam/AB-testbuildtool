import { icon } from '../data/data';
import { displayDeliveryEstimate } from '../helpers/utils';

const delivery = (ID) => {
  const html = `
        <div class="${ID}__delivery">
            <div class="${ID}__delivery-text">Estimated delivery to ${icon} United States ${displayDeliveryEstimate()}</div>
  
        </div>
    `;

  return html.trim();
};

export default delivery;
