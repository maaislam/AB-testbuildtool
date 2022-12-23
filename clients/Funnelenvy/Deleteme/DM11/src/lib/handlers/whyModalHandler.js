import whyModal from '../components/whyModal';

const whyModalHandler = (id) => {
  const modal = document.querySelector(`.${id}__recordmodal`);
  modal.classList.remove(`${id}__hide`);
  modal.classList.add('whyModal');
  modal.innerHTML = whyModal(id);
};

export default whyModalHandler;
