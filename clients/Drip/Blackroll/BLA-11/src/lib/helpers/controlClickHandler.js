export const controlOptionsClickHandler = (id, callbackFunc, fireEvent) => {
  if (location.pathname.indexOf('/products/') === -1) return;
  //document.querySelector('.conversion-area').addEventListener('click', (e) => {});
  document.getElementById('__layout').addEventListener('click', (e) => {
    //console.log(e.target);
    const target = e.target;
    const targetMatched = (desiredMatch) => target.matches(desiredMatch) || target.closest(desiredMatch);
    if (targetMatched('.conversion-area')) {
      const hiddenVarSelector = document.querySelector(`.${id}__variantselector.${id}__hide`);
      //const targetMatched = (desiredMatch) => e.target.matches(desiredMatch) || e.target.closest(desiredMatch);
      //const optionSelected = e.target.closest('[data-test-id="textOptions"]') || e.target.closest('[data-test-id="swatch"]');

      // const parentElm = optionSelected.parentElement;
      // const indexToPreselect = Array.from(parentElm.children).indexOf(optionSelected);

      hiddenVarSelector && callbackFunc();

      if (targetMatched('[data-testid="addToCart"]') && hiddenVarSelector) {
        fireEvent('default');
      }
    }

    const dropdownOpen = !!document.querySelector('.dp-open');
    if (!dropdownOpen) return;
    if (!targetMatched('.variant-dp') && !targetMatched('.variant-dp__items')) {
      //console.log('clicked outside');
      document.querySelector('.variant-dp__title')?.click();
    }
  });
};
