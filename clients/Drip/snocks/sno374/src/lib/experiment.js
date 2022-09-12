import { pollerLite } from '../../../../../../globalUtil/util';
import { products } from './products';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  if (window.location.href.includes('products')) {
  document.querySelector('body').classList.add(`${ID}`);
  const limitedTagforSwatchContainer = `
    <div class="${ID}__limitedTagForSwatchContainer">
      <label>limited</label>
    </div>`;
  const limitedTagforProducts = `
    <div class="${ID}__limitedTag">
      <label>limited</label>
    </div>`;

  const limitedTagforImageSection = `
    <div class="${ID}__limitedTagforImageSection">
        <div class="${ID}__limitedTagOverlay"></div>
        <div class="${ID}__limitedTagforImage">
          <div class="__limitedLabelforTop">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforBottom">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforLeft">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforRight">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
        </div>
    </div>`;

  const title = document.querySelector('.ProductMeta .ProductMeta__Title').innerText;

  const skuArrayFromMetadata = [];
  window.meta.product.variants.forEach((variant) => {
    skuArrayFromMetadata.push(variant.sku);
  });

  //selected Size collect from dom
  let selectedSize;
  document
    .querySelectorAll('.SizeSwatchList .HorizontalList__Item:not(.amount) .SizeSwatch__Radio')
    .forEach((size) => {
      if (size.checked) {
        selectedSize = size.value;
      }
    });
  const sizeWiseSkus = [];
  window.meta.product.variants.forEach((variant) => {
    if (variant.name.split(' / ')[1] === selectedSize) {
      sizeWiseSkus.push(variant.sku);
    }
  });

  //dom listener's declaration...........................////////////
  const colors = document.querySelectorAll('.HorizontalList__Item .ColorSwatch__Radio');
  const leftArrow = document.querySelector(
    '.product-gallery .product-gallery-main-wrapper .swiper-button-prev'
  );
  const rightArrow = document.querySelector(
    '.product-gallery .product-gallery-main-wrapper .swiper-button-next'
  );
  const swatchContainerDisplayedImage = document.querySelector('.modal-trigger .swatch-container img') && document.querySelector('.modal-trigger .swatch-container img');

  //initial design implementation...........................
  const render = () => {
    document.querySelector('body').classList.remove(`${ID}__limitedProduct`);
    let flag = 0;
    products.forEach((product) => {
      if (title === product.productTitle) {
        colors.forEach((color) => {
          if (color.value === product.color) {
                color.insertAdjacentHTML('beforebegin', limitedTagforProducts);
                if (color.checked) {
                  document.querySelector('body').classList.add(`${ID}__limitedProduct`);
                  if (flag === 0) {
                    pollerLite([() => document.querySelector(
                      '.product-gallery__container .product-gallery-main-wrapper .swiper-wrapper .swiper-slide-active'
                    )], () => {
                      document.querySelector(
                        '.product-gallery__container .product-gallery-main-wrapper .swiper-wrapper .swiper-slide-active .AspectRatio'
                      ).insertAdjacentHTML('afterbegin', limitedTagforImageSection);
                    });
                  }
                  flag = 1;
                }
          }
        });
      }
    });

    if (document.querySelector('.sno374__limitedTagforImageSection')) {
      swatchContainerDisplayedImage.insertAdjacentHTML('beforebegin', limitedTagforSwatchContainer);
    }

    setTimeout(() => {
      if (document.querySelector('.sno374__limitedTagforImageSection')) {
        document.querySelector('.modal-trigger .swatch-container img') && document.querySelector('.modal-trigger .swatch-container img').insertAdjacentHTML('beforebegin', limitedTagforSwatchContainer);
      } else {
        document.querySelector('.sno374__limitedTagForSwatchContainer') && document.querySelector('.sno374__limitedTagForSwatchContainer').remove();
      }
    }, 500);
  };
  //method call when the page load initially
  render();
  //color swatches click event.....................//////////////////
  colors.forEach((color) =>
    color.addEventListener('click', () => {
      //swatch container limited batch showing logic
      if (document.querySelector('.sno374__limitedTagForSwatchContainer')) {
        document.querySelector('.sno374__limitedTagForSwatchContainer').remove();
      }
      setTimeout(() => {
        if (document.querySelector('.sno374__limitedTagforImageSection')) {
          document.querySelector('.modal-trigger .swatch-container img') && document.querySelector('.modal-trigger .swatch-container img').insertAdjacentHTML('beforebegin', limitedTagforSwatchContainer);
        } else {
          document.querySelector('.sno374__limitedTagForSwatchContainer') && document.querySelector('.sno374__limitedTagForSwatchContainer').remove();
        }
      }, 500);

      document.querySelector('body').classList.remove(`${ID}__limitedProduct`);
      let flag = 0;
      if (document.querySelector('.sno374__limitedTagforImageSection')) {
        document.querySelector('.sno374__limitedTagforImageSection').remove();
      }
      products.forEach((product) => {
        if (title === product.productTitle) {
          if (color.value === product.color) {
                if (color.checked) {
                  setTimeout(() => {
                    document.querySelector('body').classList.add(`${ID}__limitedProduct`);
                    if (flag === 0) {
                      document
                        .querySelector(
                          '.product-gallery__container .product-gallery-main-wrapper .swiper-wrapper .swiper-slide-active .AspectRatio'
                        )
                        .insertAdjacentHTML('afterbegin', limitedTagforImageSection);
                    }
                    flag = 1;
                  }, 100);
                }
          }
        }
      });
    }));

  //right arrow slider click event....................../////////////////
  rightArrow.addEventListener('click', () => {
    if (
      document
        .querySelector('.product-gallery__thumbs')
        .firstChild.classList.contains('swiper-slide-thumb-active')
    ) {
      document.querySelector('body').classList.add(`${ID}__limitedProduct`);
    } else {
      document.querySelector('body').classList.remove(`${ID}__limitedProduct`);
    }
  });

  //left arrow slider click event....................../////////////////
  leftArrow.addEventListener('click', () => {
    if (
      document
        .querySelector('.product-gallery__thumbs')
        .firstChild.classList.contains('swiper-slide-thumb-active')
    ) {
      document.querySelector('body').classList.add(`${ID}__limitedProduct`);
    } else {
      document.querySelector('body').classList.remove(`${ID}__limitedProduct`);
    }
  });

  //attach mutation observer for slide Thumbs click event.......////////
  //Select the node that will be observed for mutations
  const targetNode = document.querySelector('.product-gallery__thumbs');

  //Options for the observer (which mutations to observe)
  const config = {
    attributes: true,
    childList: true,
    subtree: true
  };

  //Callback function to execute when mutations are observed
  const callback = () => {
      if (
        document.querySelector('.product-gallery__thumbs').firstChild.classList.contains('swiper-slide-thumb-active')
      ) {
        document.querySelector('body').classList.add(`${ID}__limitedProduct`);
      } else {
        document.querySelector('body').classList.remove(`${ID}__limitedProduct`);
      }
  };

  //Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  //Start observing the target node for configured mutations
  observer.observe(targetNode, config);
  } else if (window.location.href.includes('collections')) {
  //collectiong page
  document.querySelector('body').classList.add(`${ID}`);
  const limitedTagforImageSectionForCollection = `
    <div class="${ID}__limitedTagforImageSectionForCollection">
        <div class="${ID}__limitedTagOverlayForCollection"></div>
        <div class="${ID}__limitedTagforImageForCollection">
          <div class="__limitedLabelforTop">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforBottom">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforLeft">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
          <div class="__limitedLabelforRight">
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
            <label>limited</label>
          </div>
        </div>
    </div>`;

  const collectionProducts = Object.values(window.collectionProducts);

  const skuArrayFromMetadataInCollection = [];
  collectionProducts.forEach((product) => {
      product.variants.forEach((variant) => {
        skuArrayFromMetadataInCollection.push(variant.sku);
      });
    });

    products.forEach((product) => {
      document.querySelectorAll('.ProductItem__TitleDescription').forEach((color, colorIndex) => {
        const title = color.previousSibling.firstChild.nextElementSibling.innerText;
        if (title === product.productTitle) {
          if (color.innerText === product.color) {
            document.querySelectorAll('.ProductItem__ImageWrapper')[colorIndex].insertAdjacentHTML('afterbegin', limitedTagforImageSectionForCollection);
          }
        }
      });
    });
  }
};
