//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { colorSwatchesStore, styleSelector } from './data/static';
import { styleSlider, colorSwatchesContainer } from './component/structure';
import { pollerLite } from '../../../../../../globalUtil/util';

const { ID, VARIATION } = shared;

export default () => {
  if (VARIATION === 'control') {
    return;
  }

  if (!document.cookie.includes('testBW#12=true')) {
    document.cookie = 'testBW#12=true';
  }

  const widthChange = () => {
    const widthCalc = document
      .querySelector('.product-details .product-block--form')
      .getBoundingClientRect().width;
    document.querySelector(`.${ID}__Swiper`).style.width = `${widthCalc}px`;
  };

  document.querySelector(`${ID}__Swiper`)?.remove();
  document.querySelector(`.${ID}__colorSwatches`)?.remove();

  const injectScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', resolve);
      script.addEventListener('error', (e) => reject(e));
      document.head.appendChild(script);
    });
  const cssFile1 = document.createElement('link');
  cssFile1.rel = 'stylesheet';
  cssFile1.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
  document.head.appendChild(cssFile1);
  injectScript('https://unpkg.com/swiper@8/swiper-bundle.min.js')
    .then(() => {
      //eslint-disable-next-line no-undef
      document
        .querySelector('#data-variant-style')
        .insertAdjacentHTML('beforebegin', styleSlider(ID, styleSelector));

      widthChange();

      const swiper = new Swiper('.BW-12__Swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });

      document.querySelectorAll(`.${ID}__Swiper .swiper-slide`).forEach((slider) => {
        slider.addEventListener('click', (e) => {
          const dataAttr = e.target.closest('.swiper-slide').getAttribute('data-attr');
          window.location.href = `https://www.boredwalk.com/products/${dataAttr}`;
        });
      });
      window.addEventListener('resize', (event) => {
        widthChange();
      });
      window.addEventListener(
        'orientationchange',
        () => {
          widthChange();
        },
        false
      );
    })
    .catch((error) => {
      console.error(error);
    });

  //color swatchesDiscount

  pollerLite(['#data-variant-option-1'], () => {
    document
      .querySelector('#data-variant-option-1')
      .insertAdjacentHTML('beforebegin', colorSwatchesContainer(ID));
    document.querySelectorAll('#data-variant-option-1 option').forEach((item, index) => {
      if (item.value !== 'not-selected') {
        //console.log(item);
        document
          .querySelector(`.${ID}__colorSwatches`)
          .insertAdjacentHTML(
            'beforeend',
            `<div class="${ID}__colorSwatcheItem" style="background-color:${
              colorSwatchesStore[item.value.toLowerCase()].code
            }; background-image:url('${
              colorSwatchesStore[item.value.toLowerCase()].imgLink
            }')" data-index="${index}" data-name="${item.innerText.trim()}"></div>`
          );
      }
    });

    if (window.location.href.includes('?variant=')) {
      const colorVariantName = document.querySelector('#data-variant-option-1').value.trim();
      //console.log(colorVariantName);
      document
        .querySelector(
          `.${ID}__colorSwatches .${ID}__colorSwatcheItem[data-name="${colorVariantName}"]`
        )
        .classList.add('active');
    }

    document.querySelectorAll(`.${ID}__colorSwatches .${ID}__colorSwatcheItem`).forEach((item) => {
      item.addEventListener('click', (e) => {
        const dataIndex = e.target.closest(`.${ID}__colorSwatcheItem`).getAttribute('data-index');
        //console.log(dataIndex);
        document.querySelector('#data-variant-option-1').selectedIndex = dataIndex;
        document
          .querySelectorAll(`.${ID}__colorSwatches .${ID}__colorSwatcheItem.active`)
          .forEach((ite) => {
            ite.classList.remove('active');
          });
        e.target.closest(`.${ID}__colorSwatcheItem`).classList.add('active');
        document.querySelector('#data-variant-option-1').dispatchEvent(
          new Event('change', {
            bubbles: true
          })
        );
      });
    });
  });
};
