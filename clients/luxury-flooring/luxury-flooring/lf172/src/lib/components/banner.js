const banner = (id) => {
    const htmlStr = `
        <div class="${id}__banner">
            <div class="image-section">
                <div class="before-after">
                    <div class="before">
                        <span class="text">Before</span>
                        <div class="slide-wrapper">
                            <div class="slide-1 before-slide active">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc1.jpg" alt="Before">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1_mob.jpg" alt="Before">
                            </div>
                            <div class="slide-2 before-slide">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_2.jpg" alt="Before">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_2_mob.jpg" alt="Before">
                            </div>
                            <div class="slide-3 before-slide">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_3.jpg" alt="Before">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_3_mob.jpg" alt="Before">
                            </div>
                        </div>
                    </div>
                    <div class="after">
                        <span class="text">After</span>
                        <div class="slide-wrapper">
                            <div class="slide-1 after-slide active">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1-2.jpg" alt="After">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_1-2_mob.jpg" alt="After">
                            </div>
                            <div class="slide-2 after-slide">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_2-2.jpg" alt="After">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_2-2_mob.jpg" alt="After">
                            </div>
                            <div class="slide-3 after-slide">
                                <img class="desktop-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_3-2.jpg" alt="After">
                                <img class="mobile-img" src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_3-2_mob.jpg" alt="After">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return htmlStr;
};
export default banner;
