import { extractNumbers } from '../helpers/utils';

const bundleWrapper = (id, mainData) => {
  const { title, subHeader, imgSrc, sellPrice, comparePrice } = mainData;
  const sellPriceNumber = extractNumbers(sellPrice);
  const comparePriceNumber = comparePrice && extractNumbers(comparePrice);
  const isDiscount =
    comparePrice && ((comparePriceNumber - sellPriceNumber) / comparePriceNumber) * 100;
  const html = `
        <div class="${id}__bundleWrapper">
            <h1 class="${id}__bundleWrapper-header">UPGRADE TO THE BUNDLE</h1>
            <div class="${id}__bundleWrapper-content">
                <div class="${id}__bundleWrapper-content-image">
                    <img src="${imgSrc}"
                        alt="Super Mushroom Elixir Full Bundle"
                        class="product-image">
                </div>
                <div class="${id}__bundleWrapper-content-text">
                    <h2>${title}</h2>
                    <p>${subHeader}</p>
                    <div class="priceWrapper">
                        <span class="price"> ${sellPrice}</span>
                        ${comparePrice ? `<span class="original-price">${comparePrice}</span>` : ''}
                        ${
                          isDiscount
                            ? `<span class="discount">${Math.round(isDiscount)}% OFF</span>`
                            : ''
                        }
                    </div>
                </div>
            </div>
            <div class="${id}__bundleWrapper-total">
                <p>Total price: ${
                  comparePrice ? `<span class="original-price">${comparePrice}</span>` : ''
                }
                  <span class="price">${sellPrice}</span>
                </p>
            </div>
            <div class="${id}__bundleWrapper-button">
                <button class="button">Add to cart</button>
            </div>
        </div>
    `;

  return html;
};

export default bundleWrapper;
