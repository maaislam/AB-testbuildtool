const clickHandler = (id, eventAnchor, fireEvent) => {
  const updatePrices = (price, oldPrice) => {
    const mainWrapper = document.querySelector(`.${id}__variantselector`);
    mainWrapper.querySelectorAll(` .new-price`).forEach((item) => {
      item.innerText = price;
    });
    if (!oldPrice || oldPrice.indexOf('NaN') !== -1) return;
    mainWrapper.querySelectorAll(`.old-price`).forEach((item) => {
      item.innerText = oldPrice;
    });
  };
  const updateimage = (target, dataBlock) => {
    target
      .closest(`.${id}__variantselector`)
      .querySelector('.selected-image>img')
      .setAttribute('src', dataBlock.getAttribute('data-productimage'));
  };

  eventAnchor.addEventListener('click', (e) => {
    const target = e.target;
    const targetMatched = (desiredMatch) => target.matches(desiredMatch) || target.closest(desiredMatch);

    if (!target.closest(`.${id}__variantselector`)) return;

    if (targetMatched('.variant-dp__title')) {
      if (target.closest(`[data-nodropdown="true"]`)) return;
      const getArrow = (n) => document.querySelector(`.variant-dp__title>span:nth-child(${n})`);

      const upArrow = getArrow(2);
      const downArrow = getArrow(3);
      const swatchDp = document.querySelector('.variant-dp__items ');
      [upArrow, downArrow, swatchDp].forEach((arrow) => {
        arrow.classList.toggle(`${id}__hide`);
      });
      document.querySelector('.variant-dp__title').classList.toggle('dp-open');
    } else if (targetMatched(`.${id}__variant--item`)) {
      // console.log(target);
      const dataBlock = target.closest(`.${id}__variant--item`);
      const price = dataBlock.getAttribute('data-price');
      const oldPrice = dataBlock.getAttribute('data-oldprice');

      document.querySelectorAll(`.${id}__variant--item`).forEach((item) => {
        item.classList.remove(`${id}__selected`);
      });
      target.closest(`.${id}__variant--item`).classList.add(`${id}__selected`);
      updatePrices(price, oldPrice);
      updateimage(target, dataBlock);
      const variantType = document.querySelector(`[data-test-id="colorOptions"]`) ? 'shade' : 'size';
      document
        .querySelectorAll(`${variantType === 'shade' ? '[data-test-id="swatch"]' : '[data-test-id="textOptions"]>span'}`)
        [dataBlock.getAttribute('data-index')].click();
      document.querySelector('.variant-dp__title').click();
    } else if (targetMatched('.addtocart-btn')) {
      document.querySelector('[data-testid="addToCart"]').click();
      fireEvent('sticky');
    }
  });
};

export default clickHandler;
