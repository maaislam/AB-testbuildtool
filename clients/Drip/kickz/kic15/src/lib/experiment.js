import { observeDOM, pollerLite } from '../../../../../../globalUtil/util';
import { basketballCategory } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  if (basketballCategory) {
    console.log('in basketball');
    document.body.classList.add(`${ID}__basketball-plp`);
  } else {
    document.body.classList.add(`${ID}__show-swatches`);
  }
  // pollerLite([`${ID}__show-swatches`], () => {
  //   document.body.classList.add(`${ID}__remove-opacity`);
  // });
  console.log('in variation');

  if (!basketballCategory) {
    document.querySelectorAll('.b-product_tile-top').forEach((item, key) => {
      const itemImg = document.querySelectorAll('.b-product_tile-image');
      pollerLite([() => itemImg], () => {
        console.log('gkjsrhgfkeh');
        item.querySelector('.b-product_tile-image').insertAdjacentElement('beforeend', item.querySelector('.b-product_tile-quick_view.b-button.m-square'));
        // setTimeout(() => {
        //   document.body.classList.add(`${ID}__remove-opacity`);
        // }, 500);
      });
    });
  }
};

export default () => {
  init();
  setTimeout(() => {
    document.body.classList.add(`${ID}__remove-opacity`);
  }, 500);

  const callback = () => {
    if (!basketballCategory) {
      document.querySelectorAll('.b-product_tile-top').forEach((item, key) => {
        const itemImg = document.querySelectorAll('.b-product_tile-image');
        pollerLite([() => itemImg], () => {
          console.log('gkjsrhgfkeh');
          item.querySelector('.b-product_tile-image').insertAdjacentElement('beforeend', item.querySelector('.b-product_tile-quick_view.b-button.m-square'));
        });
      });
    }
  };

  let previousUrl = '';
  const urlObserver = new MutationObserver((mutations) => {
    if (window.location.href !== previousUrl) {
        previousUrl = window.location.href;
        console.log(`URL changed to ${window.location.href}`);
        callback();
      }
  });
  const config = {
    subtree: true, childList: true
  };
  urlObserver.observe(document, config);
  pollerLite(['#product-grid'], () => {
    observeDOM('#product-grid', callback, {
      childList: true
    });
  });
};
