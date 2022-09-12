import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

export const homePageFunc = (id) => {
    const allProdList = document.querySelectorAll('.ProductList .ProductItem__ImageWrapper');
    let itemCount = 0;
    pollerLite([() => allProdList], () => {
    document.querySelectorAll('.ProductList .ProductItem__ImageWrapper').forEach((itm, index, array) => {
            const allImgs = itm.querySelector('img');
            pollerLite([() => allImgs], () => {
                if (itm.getAttribute('href') === '/products/livefresh-saftkur-3-tage') {
                        itm.querySelectorAll('img')[1].classList.add(`${id}__image-saftkur`);
                      itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_3.imageURL);
                      itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_3.imageSet);
                      itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_3.imageSet);
                      itm.classList.add(`${id}__image-load`);
                } else if (itm.getAttribute('href') === '/products/klassische-saftkur-5-tage') {
                    itm.querySelectorAll('img')[1].classList.add(`${id}__image-saftkur`);
                    itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_5.imageURL);
                    itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_5.imageSet);
                    itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_5.imageSet);
                    itm.classList.add(`${id}__image-load`);
                } else if (itm.getAttribute('href') === '/products/livefresh-wellness-saftkur-7-tage') {
                    itm.querySelectorAll('img')[1].classList.add(`${id}__image-saftkur`);
                    itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_7.imageURL);
                    itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_7.imageSet);
                    itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_7.imageSet);
                    itm.classList.add(`${id}__image-load`);
                }
            });
            itemCount += 1;
            console.log(itemCount);
            if (itemCount === array.length) {
                document.querySelector('body').classList.add('LIV-50__opacity');
            }
        });
    });
};
