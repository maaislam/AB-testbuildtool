import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

export const checkoutsImage = () => {
    pollerLite(['.order-summary__section__content'], () => {
        document.querySelectorAll('.order-summary__section__content .product .product-thumbnail__wrapper').forEach((item) => {
            if (item.querySelector('img').getAttribute('alt') === 'Klassische Saftkur  - 5 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_5.imageURL);
            } else if (item.querySelector('img').getAttribute('alt') === 'Klassische Saftkur  - 3 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_3.imageURL);
            } else if (item.querySelector('img').getAttribute('alt') === 'Klassische Saftkur  - 7 Tage') {
                item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
                item.querySelector('img').setAttribute('src', imageSets.Tage_7.imageURL);
            }
        });
    });
};
