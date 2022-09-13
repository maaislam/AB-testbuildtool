export const hideControlElems = (ID, cardContainer) => {
  const elemsToHide = ['img', 'h2', 'div'];
  elemsToHide.forEach((elem) => {
    cardContainer?.querySelector(elem).classList.add(`${ID}__hide`);
  });
};
