const stepTwo = (id) => {
  const html = `
     <div class="${id}__validateUserModal-container-content-step-2 ${id}__step" data-attr='2'>
            <form class="${id}__form-two">
                <div class="${id}__formWrapper">
                    <div class="${id}__form-field ${id}__name">
                        <input id="name"
                               type="text"
                               name="full-name"
                               placeholder="Full Name">
                        <small>Error Message</small>
                    </div>
                    <div class="${id}__form-field ${id}__email">
                        <input id="email"
                               type="email"
                               name="email"
                               placeholder="Email address">
                        <small>Error Message</small>
                    </div>
                    <div class="${id}__form-field ${id}__creditCradNumber">
                        <input id="cc"
                               type="text"
                               name="creditcard"
                               inputmode="numeric"
                               placeholder="Credit Card Number">
                        <small>Error Message</small>
                    </div>
                    <div class="${id}__form-field ${id}__cxprationCvc">
                        <div class="" id="cxprationCvc">
                            <input id="expiring-date"
                               type="text"
                               name="expiration"
                               maxlength="7"
                               placeholder="Expiring Date MM/YY">
                            <small>Error Message</small>
                        </div>
                        <div class="" id="cvcDiv">
                            <input id="cvc"
                               type="number"
                               name="CVC"
                               inputmode="numeric"
                                maxlength="3"
                               placeholder="CVC">
                            <small>Error Message</small>
                        </div>
                        
                    </div>
                    <div class="legal__rule">
                        <div class="toggle--checkbox">
                            <label class="toggle__agree">
                                <input type="checkbox"
                                       class="checkbox">
                                <span class="control-indicator"></span>
                                <span class="toggle__button">I agree. <a href="/page/anvandarvillkor/">Term and Conditions</a> applies</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" class="${id}__subscribeBtn">Subscribe</button>

                    <p class="${id}__message">Please note: Hard-coded promo content might still be visible but will not
                        disrupt your experience.</p>
                </div>
            </form>
        </div>
  `;
  return html.trim();
};

export default stepTwo;
