import loginModal from '../components/loginModal';
import shared from '../shared/shared';

const clickHandler = (id, event, isLoggedIn, fireEvent) => {
  const { target } = event;
  const loginPopup = document.querySelector(`.${id}__popup--overlay`);
  console.log(target);
  if (target.closest(`.${id}__promobanner[data-pagetype="plp"]`) && !isLoggedIn) {
    event.preventDefault();
    event.stopPropagation();
    document.body.insertAdjacentHTML('afterbegin', loginModal(id));
    fireEvent('Clicks of the PLP / SRP element to open the modal', shared);
  } else if (
    target.closest(`.${id}__close-btn`) ||
    target.closest(`.${id}__cancel-btn`) ||
    (target.closest(`.${id}__popup--overlay`) && !target.closest(`.${id}__overlay--contents`))
  ) {
    loginPopup.remove();
  } else if (target.closest(`.${id}__login`)) {
    fireEvent('Clicks of login on PDP', shared);
  } else if (target.closest(`.${id}__signup`)) {
    fireEvent('Clicks of sign up on PDP', shared);
  } else if (target.closest(`.${id}__popup-login`)) {
    fireEvent('Clicks of login in the modal', shared);
  } else if (target.closest(`.${id}__popup-signup`)) {
    fireEvent('Clicks of sign up in the modal', shared);
  }
};

export default clickHandler;
