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
  const phone_number = document.querySelector(`.${id}__input-phone`).value;
  const email = document.querySelector(`.${id}__input-email`).value;
  const address = decodeURIComponent(getCookie('broadband_address')).split('+').join(' ');

  const data = {
    name,
    phone_number,
    email,
    address,
    provider: 'MyRepublic',
    plan_id: 281614
  };
  const formBody = Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

  fetch('/broadband_switches', {
    headers: {
      accept: '*/*',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: formBody,
    method: 'POST'
  });
  localStorage.setItem(`${id}__userData`, JSON.stringify(data));
  sessionStorage.setItem(`${id}__userData`, JSON.stringify(data));
  sessionStorage.removeItem(`${id}__show-new-modal`);
  document.getElementById(`${id}__switch-modal`).remove();
  document.querySelector(`.${id}__modal-overlay`).remove();
  document.body.classList.remove('modal-open');
};

export default newFormHandler;
