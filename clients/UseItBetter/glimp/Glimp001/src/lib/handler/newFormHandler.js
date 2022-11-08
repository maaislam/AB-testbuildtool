const newFormHandler = (id) => {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;

    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return false;
  };

  const name = document.querySelector(`.${id}__input-name`).value;
  const phone = document.querySelector(`.${id}__input-phone`).value;
  const email = document.querySelector(`.${id}__input-email`).value;
  const address = decodeURIComponent(getCookie('broadband_address')).split('+').join(' ');

  const data = JSON.stringify({
    name,
    phone,
    email,
    address
  });

  fetch('/broadband', {
    body: data,
    method: 'POST'
  });
  localStorage.setItem(`${id}__userData`, data);
  sessionStorage.setItem(`${id}__userData`, data);
  sessionStorage.removeItem(`${id}__show-new-modal`);
  document.getElementById(`${id}__switch-modal`).remove();
  document.querySelector(`.${id}__modal-overlay`).remove();
  document.body.classList.remove('modal-open');
};

export default newFormHandler;
