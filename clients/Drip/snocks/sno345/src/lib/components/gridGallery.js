const gridGallery = (id, infoIcon) => {
    const htmlStr = `<div class="${id}__product-gallery-wrapper">
    <div class="${id}__product-gallery-container-top">
        <div class="${id}__product-image-wrapper">
            <img src="" alt="" class="${id}__product-image">
            <div class="${id}__product-title-wrapper">
                <span class="${id}__product-slideshow__title"></span>
                <button class="${id}__product-slideshow__action">${infoIcon}
                    </button>
                    
            </div>
            <div class="${id}__product-slideshow__tooltip ${id}__hide">
                    <p></p>
                  </div>
        </div>
        <div class="${id}__product-image-wrapper">
            <img src="" alt="" class="${id}__product-image">
            <div class="${id}__product-title-wrapper">
                <span class="${id}__product-slideshow__title"></span>
                <button class="${id}__product-slideshow__action">${infoIcon}
                    </button>
                   
            </div>
            <div class="${id}__product-slideshow__tooltip ${id}__hide">
            <p></p>
          </div>
        </div>

    </div>
    <div class="${id}__product-gallery-container-bottom">
        <div class="${id}__product-image-wrapper">
            <img src="" alt="" class="${id}__product-image">
            <div class="${id}__product-title-wrapper">
                <span class="${id}__product-slideshow__title"></span>
                <button class="${id}__product-slideshow__action">${infoIcon}
                    </button>
                    
            </div>
            <div class="${id}__product-slideshow__tooltip ${id}__hide">
                    <p></p>
                  </div>
        </div>
        <div class="${id}__product-image-wrapper">
            <img src="" alt="" class="${id}__product-image">
            <div class="${id}__product-title-wrapper">
                <span class="${id}__product-slideshow__title"></span>
                <button class="${id}__product-slideshow__action">${infoIcon}
                    </button>
                    
            </div>
            <div class="${id}__product-slideshow__tooltip ${id}__hide">
                    <p></p>
                  </div>
        </div>
        <div class="${id}__product-image-wrapper">
            <img src="" alt="" class="${id}__product-image">
            <div class="${id}__product-title-wrapper">
                <span class="${id}__product-slideshow__title"></span>
                <button class="${id}__product-slideshow__action">${infoIcon}
                    </button>
                   
            </div>
            <div class="${id}__product-slideshow__tooltip ${id}__hide">
            <p></p>
          </div>
        </div>
    </div>
</div>`;
    return htmlStr;
};

export default gridGallery;
