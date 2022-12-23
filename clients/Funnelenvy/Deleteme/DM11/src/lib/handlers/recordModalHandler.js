import recordModal from '../components/recordModal';

const recordModalHandler = (id, target) => {
  const { site } = target.closest(`.${id}__scanresults--resultrow`).dataset;
  const modal = document.querySelector(`.${id}__recordmodal`);
  modal.classList.remove(`${id}__hide`);
  modal.innerHTML = recordModal(id, site);
};

export default recordModalHandler;
