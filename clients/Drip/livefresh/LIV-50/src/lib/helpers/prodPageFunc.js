import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

export const prodPageFunc = (id) => {
    // pollerLite([() => window.item !== undefined, '.Product__Slideshow.Carousel [tabindex="0"] img.Image--lazyLoaded'], ()=>{
    //     if (window.item.Name === 'Klassische Saftkur  - 3 Tage' || window.item.Name === 'Klassische Saftkur  - 5 Tage') {
    //         pollerLite(['.Product__Slideshow.Carousel [tabindex="0"] img.Image--lazyLoaded'], () => {
    //             document.querySelector('#Media26682505953429 img').classList.add(`${id}__image-prod-saftkur`);
    //             document.querySelector('#Media26682505953429 img').setAttribute('data-srcset', imageSets.Tage_3.imageSet);
    //             document.querySelector('#Media26682505953429 img').setAttribute('srcset', imageSets.Tage_3.imageSet);
    //             document.querySelector('.Product__SlideshowNavImage img').classList.add(`${id}__image-saftkur`);
    //             document.querySelector('.Product__SlideshowNavImage img').setAttribute('srcset', imageSets.Tage_3.imageSet);
    //             document.querySelector('#Media26682505953429').classList.add(`${id}__image-load`);
    //         });
    //     }
    // })

    pollerLite([() => window.item !== undefined], () => {
        if (window.item.Name === 'Klassische Saftkur  - 3 Tage') {
            pollerLite(['.Product__Slideshow.Carousel [tabindex="0"] img.Image--lazyLoaded'], () => {
                document.querySelector('#Media26682505953429 img').classList.add(`${id}__image-prod-saftkur`);
                document.querySelector('#Media26682505953429 img').setAttribute('data-srcset', imageSets.Tage_3.imageSet);
                document.querySelector('#Media26682505953429 img').setAttribute('srcset', imageSets.Tage_3.imageSet);
                document.querySelector('.Product__SlideshowNavImage img').classList.add(`${id}__image-saftkur`);
                document.querySelector('.Product__SlideshowNavImage img').setAttribute('srcset', imageSets.Tage_3.imageSet);
                document.querySelector('#Media26682505953429').classList.add(`${id}__image-load`);
            });
        } else if (window.item.Name === 'Klassische Saftkur  - 5 Tage') {
            pollerLite(['.Product__Slideshow.Carousel [tabindex="0"] img.Image--lazyLoaded'], () => {
                document.querySelector('#Media26682507690133 img').classList.add(`${id}__image-prod-saftkur`);
                document.querySelector('#Media26682507690133 img').setAttribute('data-srcset', imageSets.Tage_5.imageSet);
                document.querySelector('#Media26682507690133 img').setAttribute('srcset', imageSets.Tage_5.imageSet);
                document.querySelector('.Product__SlideshowNavImage img').classList.add(`${id}__image-saftkur`);
                document.querySelector('.Product__SlideshowNavImage img').setAttribute('srcset', imageSets.Tage_5.imageSet);
                document.querySelector('#Media26682507690133').classList.add(`${id}__image-load`);
            });
        } else if (window.item.Name === 'Klassische Saftkur  - 7 Tage') {
            pollerLite(['.Product__Slideshow.Carousel [tabindex="0"] img.Image--lazyLoaded'], () => {
                document.querySelector('#Media26682509820053 img').classList.add(`${id}__image-prod-saftkur`);
                document.querySelector('#Media26682509820053 img').setAttribute('data-srcset', imageSets.Tage_7.imageSet);
                document.querySelector('#Media26682509820053 img').setAttribute('srcset', imageSets.Tage_7.imageSet);
                document.querySelector('.Product__SlideshowNavImage img').classList.add(`${id}__image-saftkur`);
                document.querySelector('.Product__SlideshowNavImage img').setAttribute('srcset', imageSets.Tage_7.imageSet);
                document.querySelector('#Media26682509820053').classList.add(`${id}__image-load`);
            });
        }
    document.querySelector('body').classList.add('LIV-50__opacity');
    });

    if (document.querySelector('.Product.sticky_addtocart .ProductMeta__Title ').textContent === 'Klassische Saftkur  - 3 Tage') {
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart').classList.add(`${id}__image-mini-saftkur`);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('src', imageSets.Tage_3.imageURL);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('srcset', imageSets.Tage_3.imageURL);
    } else if (document.querySelector('.Product.sticky_addtocart .ProductMeta__Title ').textContent === 'Klassische Saftkur  - 5 Tage') {
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart').classList.add(`${id}__image-mini-saftkur`);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('src', imageSets.Tage_5.imageURL);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('srcset', imageSets.Tage_5.imageURL);
    } else if (document.querySelector('.Product.sticky_addtocart .ProductMeta__Title ').textContent === 'Klassische Saftkur  - 7 Tage') {
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart').classList.add(`${id}__image-mini-saftkur`);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('src', imageSets.Tage_7.imageURL);
        document.querySelector('.Product.sticky_addtocart .image-sticky_addtocart ').setAttribute('srcset', imageSets.Tage_7.imageURL);
    }
    document.querySelector('body').classList.add('LIV-50__opacity');
};
