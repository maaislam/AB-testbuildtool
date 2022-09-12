/*eslint-disable max-len */
import { closeBtn } from './assets';
import { galleryWrapper,
    modalWrapper,
    viewMoreBtn } from './components/parentWrappers';
import gridLayout from './helpers/gridLayout';
import hideSliderBtn from './helpers/hideSliderBtn';
import { isPDP } from './helpers/pageTypes';
import { pollerLite } from './helpers/utils';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
    if (isPDP) {
        //create modal and push existing slider into it
        if (!document.querySelector(`.${ID}__modal-main-wrapper`)) {
            document.querySelector('#main').insertAdjacentHTML('afterbegin', modalWrapper(ID, closeBtn));
        }
        document
            .querySelector(`.${ID}__modal-main-wrapper`)
            .insertAdjacentElement('afterbegin', document.querySelector('.product-gallery__container'));
        document.querySelector(`.${ID}__modal-main-wrapper`).classList.add(`${ID}__hide`);

        document
            .querySelector('.Product__Wrapper .product-gallery')
            .insertAdjacentHTML('afterbegin', galleryWrapper(ID));

        //image grid with info
        gridLayout(ID);

        //view more images button with functionality
        if (document.querySelectorAll(`.${ID}__product-gallery-wrapper`).length > 1) {
            if (!document.querySelector(`.${ID}__view-more-container`)) {
                       document
            .querySelector(`.${ID}__product-gallery-main-wrapper`)
            .insertAdjacentHTML('afterend', viewMoreBtn(ID));
                    }
        } else {
            document.querySelector(`.${ID}__view-more-container`)?.remove();
        }

        document.querySelector(`.${ID}__view-more-container`)?.addEventListener('click', () => {
            document.querySelectorAll(`.${ID}__product-gallery-wrapper`).forEach((item, key) => {
                item.classList.add(`${ID}__show`);
                //document.querySelector(`.${ID}__view-more-container`).classList.add(`${ID}__hide`);
                document.querySelector(`.${ID}__view-more-container`)?.remove();
            });
        });

        //image show info, slider button and modal open functionality
        document.querySelectorAll(`.${ID}__product-image-wrapper`).forEach((item, key) => {
            if (item.querySelector('img').getAttribute('src') === '') {
                item.querySelector('img').classList.add(`${ID}__hide`);
            }
            if (item.querySelector(`.${ID}__product-slideshow__tooltip p`).innerHTML === '') {
                item.querySelector(`.${ID}__product-title-wrapper`).classList.add(`${ID}__hide`);
            }
            item.querySelector(`.${ID}__product-title-wrapper`).addEventListener('click', () => {
                item.querySelector(`.${ID}__product-slideshow__tooltip`).classList.toggle(`${ID}__show`);
                item.querySelector(`.${ID}__product-title-wrapper`).classList.toggle(`${ID}__btn-active`);
            });

            //click grid image
            item.querySelector('img').addEventListener('click', () => {
                document.querySelector(`.${ID}__modal-main-wrapper .product-gallery__thumbs .swiper-slide.swiper-slide-thumb-active:not(.u-hidden)`)?.classList.remove('swiper-slide-thumb-active');
                document.querySelector(`.${ID}__modal-main-wrapper`).classList.add(`${ID}__visible`);
                document.querySelector(`.${ID}__modal-main-wrapper .product-gallery-main-wrapper`).classList.add(`${ID}__cover`);
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 100);

                document.querySelector(`.${ID}__modal-main-wrapper`).classList.remove(`${ID}__hide`);
                setTimeout(() => {
                    document.querySelectorAll(`.${ID}__modal-main-wrapper .product-gallery__thumbs .swiper-slide:not(.u-hidden)`)[key].classList.add('swiper-slide-thumb-active');
                    document.querySelectorAll(`.${ID}__modal-main-wrapper .product-gallery__thumbs .swiper-slide:not(.u-hidden)`)[key].click();
                    document.querySelector(`.${ID}__modal-main-wrapper .product-gallery-main-wrapper`).classList.remove(`${ID}__cover`);
                }, 200);
                document.querySelector('html').classList.add(`${ID}__overflow`);
            });
        });

        //modal close
        document.querySelector(`.${ID}__close`).addEventListener('click', () => {
            document.querySelector(`.${ID}__modal-main-wrapper`).classList.remove(`${ID}__visible`);
            //document.querySelector(`.${ID}__overlay`).classList.remove(`${ID}__visible`);
            document.querySelector(`.${ID}__modal-main-wrapper`).classList.add(`${ID}__hide`);
            document.querySelector('html').classList.remove(`${ID}__overflow`);
        });

        pollerLite([() => window.productGallerySwiper !== undefined], () => {
            window.productGallerySwiper.on('slideChange', () => {
            document.querySelector(`.${ID}__modal-main-wrapper .product-gallery__thumbs .swiper-slide.swiper-slide-thumb-active:not(.u-hidden)`)?.classList.remove('swiper-slide-thumb-active');
            document.querySelectorAll(`.${ID}__modal-main-wrapper .product-gallery__thumbs .swiper-slide:not(.u-hidden)`)[window.productGallerySwiper.activeIndex].classList.add('swiper-slide-thumb-active');
            hideSliderBtn(ID);
          });
        });
        //slider button hide and show on thumbnail click
        document
            .querySelectorAll(`.${ID}__modal-main-wrapper .product-gallery__thumbs > div`)
            .forEach((item, key) => {
                item.addEventListener('click', () => {
                    hideSliderBtn(ID);
                });
            });
    }
};

export default () => {
    //pollerLite([() => window.productGallerySwiper !== undefined], () => {
        init();
        document.querySelector('body').classList.add(`${ID}__update-image-slider`);
    //});

    //slider button hide and show on slider button click
    //document.body.addEventListener('click', (e) => {
    //const { target } = e;

    //const targetMatched = (desiredMatch) => target.matches(desiredMatch) || target.closest(desiredMatch);

    //if (
    //targetMatched(`.${ID}__modal-main-wrapper .swiper-button-prev`) ||
    //targetMatched(`.${ID}__modal-main-wrapper .swiper-button-next`)
    //) {
    //hideSliderBtn(ID);
    //// updateSliderThumbs(ID, e.target);
    //}
    //});

    document
        .querySelectorAll('.color-options__swatches li input').forEach((item, key) => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    //document.querySelector(`.${ID}__modal-main-wrapper`).remove();
                    document.querySelector(`.${ID}__product-gallery-main-wrapper`).remove();
                //document.querySelector(`.${ID}__view-more-container`).remove();
                init();
                }, 500);
            });
        });

        document
        .querySelectorAll('.product-option__value--color').forEach((item, key) => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    //document.querySelector(`.${ID}__modal-main-wrapper`).remove();
                    document.querySelector(`.${ID}__product-gallery-main-wrapper`).remove();
                //document.querySelector(`.${ID}__view-more-container`).remove();
                init();
                }, 500);
            });
        });
};
