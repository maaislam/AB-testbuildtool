const modalSuccessMsg = () => {
  const html = `
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
    `;
  return html.trim();
};

export default modalSuccessMsg;
