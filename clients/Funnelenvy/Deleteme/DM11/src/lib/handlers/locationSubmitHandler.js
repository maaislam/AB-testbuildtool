const locationSubmitHandler = (id, target) => {
  const searchTerm = target.closest('form').querySelector(`.${id}__getlocal--input`).value;
  const possibleCitieElm = target.parentElement.querySelectorAll(
    `.${id}__searchsuggestions option`
  );
  const possibleCities = Array.from(possibleCitieElm).map((item) => item.getAttribute('value'));
  //console.log(possibleCities);
  const isValid = possibleCities.includes(searchTerm);
  //console.log(isValid);

  //display error if invalid
  const errElem = '<div class="input-error">Please enter your location</div>';
  if (!isValid && !document.querySelector('.input-error')) {
    target.closest('form').insertAdjacentHTML('afterend', errElem);
    return;
  }

  //send to scanning
  const navtabs = document.querySelector(`.${id}__navtab`);
  navtabs?.classList.remove('step-1');
  navtabs?.classList.add('step-2');
  sessionStorage.setItem(`${id}__currentlocation`, searchTerm);
  document.querySelector('[data-btn="local-correct"]').click();
};

export default locationSubmitHandler;
