const closeModal = (ID) => {
  const modalElem = document.querySelector(`.${ID}__modal`);
  const modalContainer = modalElem.querySelector('.modal-popup');
  modalElem.querySelector('.modals-overlay').remove();
  modalContainer.classList.remove('_show');
  document.body.classList.remove('_has-modal');
};

export default closeModal;
