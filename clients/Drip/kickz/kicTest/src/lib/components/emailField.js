const guestEmailInput = (id, errorMessage = '') => {
  document.querySelector(`.${id}_inputemail`)?.remove();
  const htmlStr = ` 
    <div class="${id}_inputemail m-required">
    <label class="${id}_login_guestEmail--label"
        for="${id}_login_guestEmail">
     <span class="${id}__required"
           aria-hidden="true">
         *
     </span>
     E-Mail-Adresse
    </label>
    <input data-ref="field"
        class="${id}_login_guestEmail"
        type="email"
        placeholder=""
        aria-describedby="${id}_login_guestEmail-error"
        name="${id}_login_guestEmail"
        required
        maxlength="50">
    <div
      class="${id}_login_guestEmail-error">${errorMessage}</div>
    </div>  
    `;
  return htmlStr;
};

export default guestEmailInput;
