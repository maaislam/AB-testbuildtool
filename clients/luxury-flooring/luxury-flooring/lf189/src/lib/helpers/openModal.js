const openModal = (ID) => {
  const modal = document.querySelector(`.${ID}__modal`);

  modal.classList.add(`${ID}__open`);
  modal.classList.remove(`${ID}__closing`);
};
export default openModal;
