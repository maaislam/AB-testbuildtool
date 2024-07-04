import { crossIcon } from '../assets/icons';

const modalWrapper = (id) => {
  const modal = `
        <div class="${id}__validateUserModal">
            <div class="${id}__validateUserModal-overlay"></div>
            <div class="${id}__validateUserModal-container">
                <div class="${id}__validateUserModal-container-content">
                    <div class="${id}__validateUserModal-container-content-step-1 ${id}__step ${id}__show">
                        <h1>Remove Ads</h1>
                        <p>Lorem Ipsum</p>
                        <div class="${id}__buttonsWrapper">
                            <button type="button" class="${id}__button ${id}__noThanksBtn">No thanks</button>
                            <button type="button" class="${id}__button ${id}__continue">Continue</button>
                        </div>
                    </div>
                    <div class="${id}__validateUserModal-container-content-step-2 ${id}__step">
                        <div class="${id}__formWrapper">
                            <div class="${id}__form-field ${id}__name">
                                <input id="name" type="text" name="full-name" placeholder="Full Name">
                            </div>
                            <div class="${id}__form-field ${id}__email">
                                <input id="email" type="email" name="email" placeholder="Email address">
                            </div>
                            <div class="${id}__form-field ${id}__creditCradNumber">
                                 <input id="cc" type="number" name="creditcard" placeholder="Credit Card Number">
                            </div>
                            <div class="${id}__form-field ${id}__cxprationCvc">
                                  <input id="expiring-date" type="number" name="expiration" placeholder="Expiring Date MM/YY">
                                  <input id="cvc" type="number" name="CVC" placeholder="123">
                            </div>
                            <div class="legal__rule">
                                <div class="toggle--checkbox">
                                    <label class="toggle__agree">
                                        <input type="checkbox"
                                            class="checkbox">
                                        <span class="control-indicator"></span>
                                        <span class="toggle__button">I agree. <a href="#">Term and Conditions</a> applies</span>
                                    </label>
                                </div>
                            </div>

                            <button type="button" class="${id}__subscribeBtn">Subscribe</button>

                            <p class="${id}__message">Please note: Hard-coded promo content might still  be visible but will not disrupt your experience.</p>
                        </div>
                    
                    </div>
                    <div class="${id}__validateUserModal-container-content-step-3 ${id}__step"></div>
                    <div class="${id}__closeModal ${id}__closeIcon">${crossIcon}</div>
                </div>
            </div>
        </div>
    `;
  return modal;
};

export default modalWrapper;
