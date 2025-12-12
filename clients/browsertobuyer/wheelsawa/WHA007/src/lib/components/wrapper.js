import { carIcon, cashIcon } from '../assets/icons';

const wrapper = (id) => {
  const html = `
        <div class="${id}__wrapper">
            <div class="${id}__wrapper-inner">
                <div class="${id}__wrapper-inner-first">
                    <div class="car-track">
                        <div class="car">
                            ${carIcon}
                        </div>
                        <div class="track-line"></div>
                    </div>
                </div>
                <div class="${id}__wrapper-inner-second">
                    <div class="card-wrapper">
                        <div class="card" id="priceCard">
                            <h3>Getting your best price</h3>
                            <div class="card-content">
                                <div class="card-icon">${cashIcon}</div>
                                <p class="card-content-text">
                                    3x More Cash Than Junkyards
                                </p>
                                <p class="card-content-text">
                                     — That’s Our Promise
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default wrapper;
