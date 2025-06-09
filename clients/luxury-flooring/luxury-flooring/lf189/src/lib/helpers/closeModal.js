export const closeModal = (ID) => {
  const modal = document.querySelector(`.${ID}__modal`);

  modal.classList.add(`${ID}__closing`);
  modal.classList.remove(`${ID}__open`);
};
