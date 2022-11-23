import loginModal from '../components/loginModal';

const clickHandler = (id, event, isLoggedIn) => {
  const { target } = event;
  const loginPopup = document.querySelector(`.${id}__popup--overlay`);

  console.log(target);

  if (target.closest(`.${id}__promobanner[data-pagetype="plp"]`) && !isLoggedIn) {
    event.preventDefault();
    event.stopPropagation();
    document.body.insertAdjacentHTML('afterbegin', loginModal(id));
  } else if (
    target.closest(`.${id}__close-btn`) ||
    target.closest(`.${id}__cancel-btn`) ||
    (target.closest(`.${id}__popup--overlay`) && !target.closest(`.${id}__overlay--contents`))
  ) {
    loginPopup.remove();
  }
};

export default clickHandler;
