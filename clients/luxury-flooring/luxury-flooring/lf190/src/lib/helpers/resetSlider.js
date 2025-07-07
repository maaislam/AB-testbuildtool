const resetSlider = (id) => {
  const $ = window.jQuery;
  const $products = $(`.${id}__productSlider.products`); //Use the correct jQuery selector

  if (typeof $ === 'undefined' || !$products.length) {
    console.warn('jQuery or .products not found.');
    return;
  }

  //Properly destroy Slick
  if ($products.hasClass('slick-initialized')) {
    $products.slick('unslick');
  }

  //Reinitialize Slick
  setTimeout(() => {
    $products.slick({
      dots: true,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 1,
      appendDots: $('.slick-dots-placeholder'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.5
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2
          }
        }
      ]
    });

    console.log('Slider reinitialized');

    $('.slick-prev-dot').on('click', () => {
      $products.slick('slickPrev');
    });

    $('.slick-next-dot').on('click', () => {
      $products.slick('slickNext');
    });
  }, 100);
};

export default resetSlider;
