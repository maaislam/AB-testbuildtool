const nameSubmitHandler = (id, target) => {
  //validate input
  const fullNameElem = target.closest('form').querySelector(`.${id}__fullname--input`);
  const fullname = fullNameElem.value.trim();
  const isValid = fullname.includes(' ') && fullname.length >= 3;

  //display error if invalid
  const errElem = '<div class="input-error">Please write full name</div>';
  if (!isValid && !document.querySelector('.input-error')) {
    target.closest('form').insertAdjacentHTML('afterend', errElem);
    return;
  }

  //get current location from DOM
  //store name in session storage
  const currentLocation = document.getElementById('billie-widget-txt-location').value;
  sessionStorage.setItem(`${id}__fullname`, fullname);
  sessionStorage.setItem(`${id}__currentlocation`, currentLocation);

  //place name in control's form
  document.getElementById('billie-widget-txt-name').value = fullname;
  //send user to scanning page by clicking control's submit
  document.getElementById('billie-widget-submit').click();
};

export default nameSubmitHandler;
