const newFormHandler = (id, callback) => {
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
  //window.location.reload();

  callback();
};

export default newFormHandler;
