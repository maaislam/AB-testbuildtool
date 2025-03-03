const hideEmailError = (id, input) => {
  const formWrapper = input.closest(`.${id}__modal-body`);
  const emailError = formWrapper.querySelector(`.${id}__error`);

  input.classList.remove(`${id}__inputError`);
  emailError.classList.add(`${id}__hide`);
  formWrapper.classList.add(`${id}__emailValid`);
};
export default hideEmailError;
