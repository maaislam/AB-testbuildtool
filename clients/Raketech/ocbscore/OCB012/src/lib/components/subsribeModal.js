const subsribeModal = (id) => {
  const html = `
    <div class="${id}__subsribeModal">
    
            <div class="braze-modal separate-window-off">
                <div class="braze-modal__header">
                    <h2 class="braze-modal__title">Sign Up For Free Predictions!</h2>
                    <button class="braze-modal__close-btn"></button>
                </div>
                <div id="braze-modal__form" class="braze-modal__form">
                    <input type="text" id="first-name" class="braze-modal__input" placeholder="Name">
                    <input type="tel" id="mobile-number" class="braze-modal__input" placeholder="Mobile Number">
                    <div id="braze-modal__mobile-error" class="braze-modal__error">Please enter a valid Mobile Number</div>
                    <input type="email" id="email" class="braze-modal__input" placeholder="Email Address *">
                    <div id="braze-modal__email-error" class="braze-modal__error">Please enter a valid email</div>
                    <div class="braze-modal__checkbox-container">
                        <input type="checkbox" id="consent" class="braze-modal__checkbox">
                        <label for="consent" class="braze-modal__label">By checking this box, you consent to receive promotional emails, offers, and updates from us. You can unsubscribe at any time.</label>
                    </div>
                    <div id="braze-modal__consent-error" class="braze-modal__error">Please consent to receive emails.</div>
                    <div class="braze-modal__checkbox-container">
                        <input type="checkbox" id="privacy" class="braze-modal__checkbox">
                        <label for="privacy" class="braze-modal__label">By checking this box, you consent to the processing of your personal data in accordance with our <a href="https://ocbscores.com/terms-and-conditions/" target="_blank" style="color:#FFF;">privacy policy</a> and legal requirements.</label>
                    </div>
                    <div id="braze-modal__privacy-error" class="braze-modal__error">Please consent to data processing.</div>
                    <button id="braze-modal-submit" class="braze-modal__submit-btn">Subscribe Now</button>
                </div>
            </div>

            <div class="braze-modal__thank-you separate-window-off">
                <div class="braze-modal__thank-you-header">
                    <div class="braze-modal__thank-you-icon-title">
                        <svg class="braze-modal__thank-you-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8.54643V9.16643C14.9983 12.1189 13.0549 14.7186 10.2236 15.5557C7.39227 16.3928 4.34759 15.268 2.74063 12.7911C1.13367 10.3143 1.34724 7.07552 3.26551 4.83114C5.18379 2.58677 8.34981 1.87145 11.0467 3.0731" stroke="#008C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15.6667 3.1665L8.33337 10.4998L6.33337 8.49984" stroke="#008C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h2 class="braze-modal__thank-you-title">Subscribe Now</h2>
                    </div>
                    <button class="braze-modal__close-btn"></button>
                </div>
                <p class="braze-modal__thank-you-message">Thank you for subscribing! Check your email for updates.</p>
                <button class="braze-modal__check-email-btn">Check Email</button>
            </div>
            <hidden class="ab-programmatic-close-button"></hidden>
    </div>
  `;
  return html.trim();
};

export default subsribeModal;
