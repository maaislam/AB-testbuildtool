const claimDiscountButtonHandler = (ID, target) => {
  if (isEmailValid) {
    fireBootsEvent(
      'Customer enters their email and clicks submit',
      true,
      eventTypes.experience_action,
      {
        action: actionTypes.click_cta,
        action_detail: 'Customer enters their email and clicks submit'
      }
    );

    emailWrapperElement.classList.add(`${ID}__active`);
    emailInput.disabled = true;

    emailInput.value &&
      subscribeToBoots(emailInput.value)
        .then((result) => {
          if (result && result.status) {
            emailWrapperElement.classList.remove(`${ID}__active`);
            emailInput.removeAttribute('disabled');
            showSuccessMessage(ID, emailWrapperElement);
          }
        })
        .catch((error) => {
          console.error('email subscription failed:', error);
          emailWrapperElement.classList.remove(`${ID}__active`);
          emailInput.removeAttribute('disabled');
          showSuccessMessage(ID, emailWrapperElement);
        });

    if (isModalOpen) {
      modal.classList.remove(`${ID}__open`);
      document.documentElement.style.overflow = 'inherit';
    }
  }
};

export default claimDiscountButtonHandler;
