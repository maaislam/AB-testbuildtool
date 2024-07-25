import { formatPrice } from '../helpers/utils';

const card = (id, data) => {
    const { featured_image, title, compare_at_price, price, url } = data;

    const htmlStr = `
    <div class="grid__item collection-image-anim wow fadeInUp col-md-3 col-6 indiv-product-wrapper alpha mobile-clear tablet-clear"
    style="visibility: visible; animation-name: fadeInUp;">
        <article class="indiv-product">
            <a class="grid__image"
                href="${url}"
                title="${title}" tabindex="-1">
                <noscript aria-hidden="true">
                    <img class=""
                        src="${featured_image}"
                        alt="${title}" />
                </noscript>
                <img loading="lazy" class="" alt="${title}" width="2500" height="2500" src="${featured_image}">
            </a>
            <div class="hp-title">
                <a href="${url}"
                    class="indiv-product__link">
                    <span class="indiv-product-title-text">${title}</span>
                    <span class="money-styling">
                        <span class="compare-at-price">
                            <span class="money">${formatPrice(compare_at_price)}</span>
                        </span>
                        <span class="money">${formatPrice(price)}</span>
                    </span>
                </a>
            </div>
        </article>
    </div>`;
    return htmlStr;
};
export default card;
