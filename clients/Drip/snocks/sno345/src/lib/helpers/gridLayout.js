import { infoIcon } from '../assets';
import gridGallery from '../components/gridGallery';

const gridLayout = (id) => {
    const imgSources = [];
    document
        .querySelectorAll('.product-gallery-main-wrapper .swiper-slide')
        .forEach((item, key) => {
            if (!item.classList.contains('u-hidden')) {
                imgSources.push({
                    src: item.querySelector('img').getAttribute('data-original-src'), title: item.querySelector('.product-slideshow__details span')?.innerHTML, tooltip: item.querySelector('.product-slideshow__tooltip')?.textContent
                   });
            }
        });

    const totalContainers = Math.ceil(imgSources.length / 5);

    for (let i = 0; i < totalContainers; i += 1) {
        document
            .querySelector(`.${id}__product-gallery-main-wrapper`)
            .insertAdjacentHTML('afterbegin', gridGallery(id, infoIcon));
    }

    imgSources.forEach((item, key) => {
        document.querySelectorAll(`.${id}__product-image`)[key].setAttribute('src', item.src);
        if (item.title !== undefined) {
            document.querySelectorAll(`.${id}__product-slideshow__title`)[key].innerHTML = item.title;
        } else {
            document.querySelectorAll(`.${id}__product-title-wrapper`)[key].classList.add(`${id}__hide`);
        }
        if (item.tooltip !== undefined) {
            document.querySelectorAll(`.${id}__product-slideshow__tooltip p`)[key].innerHTML = item.tooltip;
        }
    });
};

export default gridLayout;
