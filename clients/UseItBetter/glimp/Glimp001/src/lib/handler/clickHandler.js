/*eslint-disable no-param-reassign */
const clickHandler = (id, target) => {
  if (target.matches('#address-required-submit-btn')) {
    //set a session storage & delete it after new form is rendered
    sessionStorage.setItem(`${id}__show-new-modal`, true);
  } else if (target.closest(`#${id}__switch-btn`)) {
    //collect and store data
    const name = document.querySelector(`.${id}__input-name`).value;
    const phone = document.querySelector(`.${id}__input-phone`).value;
    const email = document.querySelector(`.${id}__input-email`).value;

    const data = JSON.stringify({
      name,
      phone,
      email
    });
    sessionStorage.setItem(`${id}__userData`, data);
    window.location.reload();
  } else if (target.closest('[id^="broadband-switch-button"]')) {
    //place data
    const sessionData = JSON.parse(sessionStorage.getItem(`${id}__userData`));
    const { name, phone, email } = sessionData;
    const { planid } = target.dataset;

    const nameField = document.getElementById(`switch-name-field-${planid}`);
    const phoneField = document.getElementById(`switch-phone-number-${planid}`);
    const emailField = document.getElementById(`switch-email-address-${planid}`);

    nameField.value = name;
    phoneField.value = phone;
    emailField.value = email;

    const selectDealBtn = document.getElementById(`switch-btn-${planid}`);

    selectDealBtn.classList.add(`${id}__hide`);

    setTimeout(() => {
      //selectDealBtn.click();
    }, 500);
  }
};

export default clickHandler;
