export const confirmEmail = (id) => {
  const html = `
    <div class="zm-form-item first-capitalize is-required ${id}__confirmEmailAddress">
        <div class="zm-form-item__content">
            <div class="zm-input zm-input--xLarge is-empty zm-input--show-label">
                <input
                type="email"
                autocomplete="custom"
                name="custom"
                placeholder=""
                aria-required="true"
                aria-label="Email Address *"
                id="confirm-email-address"
                maxlength="128"
                class="zm-input__inner"
                onpaste="return false"
                ondrop="return false"
                /><label for="confirm-email-address" class="zm-input__label">Confirm Email Address *</label
                ><span class="zm-input__suffix" style=""><span class="zm-input__suffix-inner"></span></span>
            </div>
            <div role="alert" aria-label="Required item,  Email Address *, Email Address is Required" class="zm-form-item__error ${id}__errorMessage" style="display:none;">
                <span aria-hidden="true">Email confirmation does not match</span>
            </div>
        </div>
    </div>  
    `;
  return html;
};
