const atfCustomization = (id) => {
    const reviewsSummary = document.querySelector('.product-info-main > .product-reviews-summary');

    //best seller imag add on the right side
    const bestSellerImgHTML = `<div class="${id}__bestsellerImage">
      <img src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/badge_bestseller.png"/>
    </div>`;
    if (!document.querySelector(`.${id}__bestsellerImage`)) {
        reviewsSummary.insertAdjacentHTML('afterbegin', bestSellerImgHTML);
    }
};

export default atfCustomization;
