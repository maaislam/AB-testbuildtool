const modalContent = () => {
  const html = `
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
    `;

  return html.trim();
};

export default modalContent;
