const closeModal = (ID) => {
  const modalElem = document.querySelector(`.${ID}__modal`);
  const modalContainer = modalElem.querySelector('.modal-popup');
  const modalOverlays = document.querySelectorAll('.modals-overlay');
  if (modalOverlays.length) {
    modalOverlays.forEach((overlay) => overlay.remove());
  }
  modalContainer.classList.remove('_show');
  document.body.classList.remove('_has-modal');
};

export default closeModal;
