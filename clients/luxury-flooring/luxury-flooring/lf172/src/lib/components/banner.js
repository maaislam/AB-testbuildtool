const banner = (id, bannerImages) => {
    const { image1, image2, image3 } = bannerImages;
    const htmlStrV1 = `
        <div class="${id}__banner">
            <div class="image-section">
                <div class="before-after">
                    <div class="before">
                        <div class="slide-wrapper">
                            <div class="slide-1 before-slide active">
                                <img class="desktop-img" src="${image1}" alt="Before">
                                <img class="mobile-img" src="${image1}" alt="Before">
                            </div>
                        </div>
                    </div>
                    <div class="after">
                        <div class="slide-wrapper">
                            <div class="slide-1 after-slide active">
                                <img class="desktop-img" src="${image2}" alt="After">
                                <img class="mobile-img" src="${image2}" alt="After">
                            </div>
                        </div>
                    </div>
                    <div class="third-image">
                        <div class="slide-wrapper">
                            <div class="slide-1 after-slide active">
                                <img class="desktop-img" src="${image3}" alt="third-image">
                                <img class="mobile-img" src="${image3}" alt="third-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return htmlStrV1;
};
export default banner;
