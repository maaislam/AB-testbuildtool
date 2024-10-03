const formatPrice = (amount, code = 'en-US', currency = 'USD') => {
  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);
};

const extractNumber = (priceString) => {
  const number = priceString.replace(/[^\d.-]/g, ''); //Remove everything except digits, decimal points, and minus sign
  return parseFloat(number); //Convert the result to a floating-point number
};

const product = (id, data) => {
  const { Title, Url, ItemId, Metadata, ImageUrl } = data;
  const modifiedPrice = extractNumber(Metadata.Price);
  const html = `
    <div class="grid__item grid-product small--one-half medium-up--one-quarter aos-init aos-animate"
     data-aos="row-of-"
     data-product-handle="${Title}"
     data-product-id="${ItemId}">
    <div class="grid-product__content">
        <a href="${Url}"
           class="grid-product__link">
            <div class="grid-product__image-mask">
                <div class="image-wrap"
                     style="height: 0; padding-bottom: 150.00000000000003%;"><img
                         class="grid-product__image lazyautosizes lazyloaded"
                         data-widths="[180, 360, 540, 720, 900, 1080]"
                         data-aspectratio="0.6666666666666666"
                         data-sizes="auto"
                         alt="white perfectwhitetee"
                         data-srcset="${ImageUrl}"
                         sizes="283px"
                         srcset="${ImageUrl}">
                </div>
                <div class="grid-product__secondary-image small--hide">
                <img class="lazyautosizes lazyloaded"
                         data-widths="[360, 540, 720, 1000]"
                         data-aspectratio="0.6666666666666666"
                         data-sizes="auto"
                         alt="white"
                         data-srcset=""
                         sizes="285px"
                         srcset="">
                </div>
            </div>

            <div class="grid-product__meta">
                <div class="grid-product__title">${Title}</div>
                <div class="grid-product__vendor">${Metadata.Brand}</div>
                <div class="grid-product__price">
                    <span>
                        ${formatPrice(modifiedPrice)}
                    </span>
                </div>
            </div>

            <div class="grid-product__colors"></div>
        </a>
    </div>
</div>
  `;
  return html.trim();
};

export default product;
