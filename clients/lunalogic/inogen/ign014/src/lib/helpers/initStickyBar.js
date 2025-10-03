const initStickyBar = (targetSelector) => {
  const target = document.querySelector(targetSelector);

  //Create sticky bar element
  const stickyBar = document.createElement('div');
  stickyBar.className = 'sticky-bar';
  stickyBar.innerHTML = `<div class="sticky-bar-inner">
    <div class="sticky-bar-right">
        <button class="sticky-bar-btn">Add to cart</button>
    </div>
  </div>`;

  if (!document.querySelector('.sticky-bar')) {
    document.body.appendChild(stickyBar);
  }

  const atcWrapper = document.querySelector('.single_add_to_cart_button-wrapper');
  const variationsWrapper = atcWrapper.querySelector('.variations');
  const cloneVariations = variationsWrapper ? variationsWrapper.cloneNode(true) : null;
  const priceContainer = document.querySelector('.product_header .product_price');
  const stickyBarInner = document.querySelector('.sticky-bar-inner');
  const rightContainer = stickyBarInner.querySelector('.sticky-bar-right');
  if (cloneVariations && !document.querySelector('.sticky-bar-left')) {
    stickyBarInner.insertAdjacentElement('afterbegin', cloneVariations);
    cloneVariations.classList.add('sticky-bar-left');
  }

  if (priceContainer && !priceContainer.classList.contains('sticky-price-container')) {
    rightContainer.insertAdjacentElement('afterbegin', priceContainer);
    priceContainer.classList.add('sticky-price-container');
    document
      .querySelector('.sticky-price-container .price')
      .insertAdjacentHTML('afterbegin', '<span>Total :</span>');
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //Target is visible → hide sticky bar
          stickyBar.classList.remove('visible');
        } else {
          //Target not visible → show sticky bar
          stickyBar.classList.add('visible');
        }
      });
    },
    {
      threshold: 0
    } //Trigger as soon as element enters/leaves viewport
  );

  observer.observe(target);
};

export default initStickyBar;
