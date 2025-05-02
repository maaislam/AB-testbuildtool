const openModal = (ID) => {
  const modalElem = document.querySelector(`.${ID}__modal`);
  if (modalElem.querySelector('.modals-overlay')) {
    modalElem.querySelector('.modals-overlay').remove();
  }
  modalElem.insertAdjacentHTML(
    'beforeend',
    `<div class="modals-overlay"
                style="z-index: 901;"></div>`
  );
  const modalContainer = modalElem.querySelector('.modal-popup');
  modalContainer.classList.add('_show');
  document.body.classList.add('_has-modal');
  document.documentElement.style.overflowY = 'hidden';
};

export default openModal;
