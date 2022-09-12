export const isMobile = window.DY.deviceInfo.type === 'smartphone';
export const removeExisting = (ID) =>
  document.querySelectorAll(`.${ID}__slidecatalog`).forEach((item) => {
    item?.remove();
  });
