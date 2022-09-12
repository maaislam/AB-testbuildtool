import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

export const cartPageFunc = () => {
    pollerLite([() => '.CartItem img'], () => {
    document.querySelectorAll('.CartItem').forEach((item) => {
            if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 5 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_5.imageURL);
                item.querySelector('img').setAttribute('data-src', imageSets.Tage_5.imageURL);
            } else if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 3 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_3.imageURL);
                item.querySelector('img').setAttribute('data-src', imageSets.Tage_3.imageURL);
            } else if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 7 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_7.imageURL);
                item.querySelector('img').setAttribute('data-src', imageSets.Tage_7.imageURL);
            }
        });
    });

    pollerLite(['.ProductItem  .ProductItem__Wrapper img'], () => {
    document.querySelectorAll('.ProductItem  .ProductItem__Wrapper').forEach((itm) => {
            if (itm.querySelectorAll('img')[1].getAttribute('alt') === 'Klassische Saftkur  - 3 Tage') {
                    itm.querySelectorAll('img')[1].classList.add('LIV-50__image-mini-saftkur');
                  itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_3.imageURL);
                  itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_3.imageSet);
                  itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_3.imageSet);
            } else if (itm.querySelectorAll('img')[1].getAttribute('alt') === 'Klassische Saftkur  - 5 Tage') {
                itm.querySelectorAll('img')[1].classList.add('LIV-50__image-mini-saftkur');
                itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_5.imageURL);
                itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_5.imageSet);
                itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_5.imageSet);
            } else if (itm.querySelectorAll('img')[1].getAttribute('alt') === 'Klassische Saftkur  - 7 Tage') {
                itm.querySelectorAll('img')[1].classList.add('LIV-50__image-mini-saftkur');
                itm.querySelectorAll('img')[1].setAttribute('data-src', imageSets.Tage_7.imageURL);
                itm.querySelectorAll('img')[1].setAttribute('data-srcset', imageSets.Tage_7.imageSet);
                itm.querySelectorAll('img')[1].setAttribute('srcset', imageSets.Tage_7.imageSet);
            }
        });
    });
};
