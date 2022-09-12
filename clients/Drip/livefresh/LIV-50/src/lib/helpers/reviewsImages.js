import { pollerLite } from '../../../../../../../globalUtil/util';
import { imageSets } from './imageSets';

const reviewsImages = () => {
    function waitForEl(selector, callback) {
        if (document.querySelectorAll(selector).length) {
          callback();
        } else {
          setTimeout(() => {
            waitForEl(selector, callback);
          }, 100);
        }
      }

    pollerLite([() => '#stamped-reviews-widget'], () => {
            waitForEl('.stamped-carousel-scroll-wrapper .block', () => {
            document.querySelectorAll('.stamped-carousel-scroll-wrapper .block').forEach((item, keys) => {
                if (item.querySelector('.stamped-reviews-product-title a').textContent === 'Klassische Saftkur  - 3 Tage') {
                    item.querySelector('.stamped-reviews-image img').setAttribute('src', imageSets.Tage_3.imageURL);
                    item.querySelector('.stamped-reviews-image img').setAttribute('data-src', imageSets.Tage_3.imageURL);
                } else if (item.querySelector('.stamped-reviews-product-title a').textContent === 'Klassische Saftkur  - 5 Tage') {
                    item.querySelector('.stamped-reviews-image img').setAttribute('src', imageSets.Tage_5.imageURL);
                    item.querySelector('.stamped-reviews-image img').setAttribute('data-src', imageSets.Tage_5.imageURL);
                } else if (item.querySelector('.stamped-reviews-product-title a').textContent === 'Klassische Saftkur  - 7 Tage') {
                    item.querySelector('.stamped-reviews-image img').setAttribute('src', imageSets.Tage_7.imageURL);
                    item.querySelector('.stamped-reviews-image img').setAttribute('data-src', imageSets.Tage_7.imageURL);
                }
            });
        });
    });
};

export default reviewsImages;
