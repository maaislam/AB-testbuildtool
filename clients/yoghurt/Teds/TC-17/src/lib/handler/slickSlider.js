import { pollerLite } from '../../../../../../../globalUtil/util';

const sliderProperty = (selector) => {
  window.jQuery(`${selector} .products.list.items`).slick({
    arrows: true,
    fade: false,
    touchMove: true,
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
const slickSliderFunction = (id, selector) => {
  pollerLite([`${selector} .products.list.items.slick-initialized`], () => {
    if (document.querySelector(`${selector} .products.list.items.slick-initialized.slick-slider`)) {
      window
        .jQuery(`${selector} .products.list.items.slick-initialized.slick-slider`)
        .slick('unslick');

      sliderProperty(selector);
    }
  });

  pollerLite([`${selector} .products.list.items:not(.slick-initialized)`], () => {
    if (document.querySelector(`${selector} .products.list.items`)) {
      sliderProperty(selector);
    }
  });
};

export default slickSliderFunction;
