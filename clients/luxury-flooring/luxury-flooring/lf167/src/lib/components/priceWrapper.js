import { price } from './price';
import { orderSample } from './orderSample';
import { tradePrice } from './tradePrice';
import { floorStr } from './floorStr';

export const priceWrapperV4 = (id, sellPrice, comparePrice) => {
  const html = `
        <div class="${id}__priceWrapper">
            <div class="${id}__priceContainer">
                ${price(id, sellPrice, comparePrice)}
            </div>
            <div class="${id}__orderSampleWrapper">
                ${orderSample(id)}
            </div>
        </div>
    `;

  return html;
};

export const priceWrapperV5 = (id, sellPrice, comparePrice) => {
  const html = `
            <div class="${id}__priceWrapper">
              <div class="${id}__priceContainer">
                  <div class="${id}__priceSection">
                      ${price(id, sellPrice, comparePrice)}
                  </div>
                  <div class="${id}__divider"></div>
                  ${tradePrice(id)}
              </div>
              <div class="${id}__orderSampleWrapper">
                  ${orderSample(id)}
              </div>
            </div>
        `;

  return html;
};

export const priceWrapperV6 = (id, sellPrice, comparePrice) => {
  const html = `
          <div class="${id}__priceWrapper">
            <div class="${id}__priceContainer">
                <div class="${id}__priceSection">
                    ${price(id, sellPrice, comparePrice)}
                </div>
                <div class="${id}__divider"></div>
                ${tradePrice(id)}
            </div>
            <div class="${id}__orderSampleWrapper">
                ${floorStr(id)}
                ${orderSample(id)}
            </div>
          </div>
      `;

  return html;
};
