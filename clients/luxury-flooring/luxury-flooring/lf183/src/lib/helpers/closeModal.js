const closeModal = (ID) => {
  const modalElem = document.querySelector(`.${ID}__modal`);
  const modalContainer = modalElem.querySelector('.modal-popup');
  modalElem.querySelectorAll('.modals-overlay').forEach((item) => item.remove());
  modalContainer.classList.remove('_show');
  document.body.classList.remove('_has-modal');
  document.documentElement.style.overflowY = 'scroll';
};

export default closeModal;
