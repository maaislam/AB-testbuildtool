const newFormHandler = (id) => {
  const name = document.querySelector(`.${id}__input-name`).value;
  const phone = document.querySelector(`.${id}__input-phone`).value;
  const email = document.querySelector(`.${id}__input-email`).value;

  const data = JSON.stringify({
    name,
    phone,
    email
  });
  sessionStorage.setItem(`${id}__userData`, data);
  sessionStorage.removeItem(`${id}__show-new-modal`);
  document.getElementById(`${id}__switch-modal`).remove();
  document.querySelector(`.${id}__modal-overlay`).remove();
  document.body.classList.remove('modal-open');
};

export default newFormHandler;
