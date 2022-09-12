import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

export const collectionPageFunc = (id) => {
    pollerLite(['.FeaturedProduct__Gallery img'], () => {
        if (document.querySelector('.FeaturedProduct__Gallery').getAttribute('href') === '/products/livefresh-saftkur-3-tage') {
            document.querySelector('.FeaturedProduct__Gallery img').classList.add(`${id}__image-saftkur`);
            document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-src', imageSets.Tage_3.imageURL);
            document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-srcset', imageSets.Tage_3.imageSet);
            document.querySelector('.FeaturedProduct__Gallery img').setAttribute('srcset', imageSets.Tage_3.imageSet);
      } else if (document.querySelector('.FeaturedProduct__Gallery').getAttribute('href') === '/products/klassische-saftkur-5-tage') {
          document.querySelector('.FeaturedProduct__Gallery img').classList.add(`${id}__image-saftkur`);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-src', imageSets.Tage_5.imageURL);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-srcset', imageSets.Tage_5.imageSet);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('srcset', imageSets.Tage_5.imageSet);
      } else if (document.querySelector('.FeaturedProduct__Gallery').getAttribute('href') === '/products/livefresh-wellness-saftkur-7-tage') {
          document.querySelector('.FeaturedProduct__Gallery img').classList.add(`${id}__image-saftkur`);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-src', imageSets.Tage_7.imageURL);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('data-srcset', imageSets.Tage_7.imageSet);
          document.querySelector('.FeaturedProduct__Gallery img').setAttribute('srcset', imageSets.Tage_7.imageSet);
      }
    });
};
