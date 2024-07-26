import saleCard from './saleCard';

const banner = (id, VARIATION) => {
    const htmlStrV1 = `
        <div class="${id}__banner">
            <div class="${id}__saleBanner">
                ${saleCard(id)}
            </div>
            <div class="image-section">
                <div class="before-after">
                    <div class="before">
                        <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc1.jpg" alt="Before">
                        <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1_mob.jpg" alt="Before">
                        <span class="text">Before</span>
                    </div>
                    <div class="after">
                        <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1-2.jpg" alt="After">
                        <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1-2_mob.jpg" alt="After">
                        <span class="text">After</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    const htmlStrV2 = `
    <div class="${id}__bannerV2">
        <div class="${id}__saleBanner">
            ${saleCard(id)}
        </div>
        <div class="${id}__banner-container">
            <div class="image-container image-section">
                <img class="image-before slider-image image-1 desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_main2.png">
                <img class="image-after slider-image image-2 desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_main.png">
                <img class="image-before slider-image image-1 mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_main_mobile2.png">
                <img class="image-after slider-image image-2 mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_main_mobile.png">
            </div>
            <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown"
                class="slider ${id}__slider">
            <div class="slider-line" aria-hidden="true"></div>
            <div class="slider-button" aria-hidden="true">
                <img class="" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/icon_controls.svg">
            </div>
        </div>
    </div>`;
    return VARIATION === '1' ? htmlStrV1 : htmlStrV2;
};
export default banner;
