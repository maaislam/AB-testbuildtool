const renderPopup = (id, loginStatus, fireEvent) => {
  const htmlStr = `
    <div class="${id}__popup--overlay">

        
        <div class="${id}__overlay--contents">
            <div class="${id}__close-btn"><svg xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none">
                <path d="M1 1C2.75659 2.84442 5.3449 5.53333 5.3449 5.53333L9.5 9.5M9.5 1L1 9.5"
                        stroke="#616E80"
                        stroke-width="1.5" />
            </svg></div>
            <div class="headline">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none">
                        <path d="M11.7679 3C12.5378 1.66667 14.4623 1.66667 15.2321 3L23.4593 17.25C24.2291 18.5833 23.2668 20.25 21.7272 20.25H5.27276C3.73316 20.25 2.77091 18.5833 3.54071 17.25L11.7679 3Z"
                                fill="#FFC314" />
                        <path d="M14.3173 6.878V10.882C14.3173 11.3067 14.2963 11.7243 14.2543 12.135C14.2123 12.541 14.1586 12.9727 14.0933 13.43H12.9173C12.8519 12.9727 12.7983 12.541 12.7563 12.135C12.7143 11.7243 12.6933 11.3067 12.6933 10.882V6.878H14.3173ZM12.4203 16.048C12.4203 15.9033 12.4459 15.7657 12.4973 15.635C12.5533 15.5043 12.6279 15.3923 12.7213 15.299C12.8193 15.2057 12.9336 15.131 13.0643 15.075C13.1949 15.019 13.3349 14.991 13.4843 14.991C13.6289 14.991 13.7666 15.019 13.8973 15.075C14.0279 15.131 14.1399 15.2057 14.2333 15.299C14.3313 15.3923 14.4083 15.5043 14.4643 15.635C14.5203 15.7657 14.5483 15.9033 14.5483 16.048C14.5483 16.1973 14.5203 16.3373 14.4643 16.468C14.4083 16.594 14.3313 16.7037 14.2333 16.797C14.1399 16.8903 14.0279 16.9627 13.8973 17.014C13.7666 17.07 13.6289 17.098 13.4843 17.098C13.3349 17.098 13.1949 17.07 13.0643 17.014C12.9336 16.9627 12.8193 16.8903 12.7213 16.797C12.6279 16.7037 12.5533 16.594 12.4973 16.468C12.4459 16.3373 12.4203 16.1973 12.4203 16.048Z"
                                fill="white" />
                    </svg>
                </div>
                <div class="text">
                    <span>Please note:</span> Our trade prices are only available for Travis Perkins account holders.
                </div>
            </div>
            <div class="paragraph">Please login to your online account to access these prices.</div>
            <div class="btn-container">
                <div class="user-btn-wrapper">
                    <a class="${id}__popup-login" href="/login">Login</a>
                    <a class="${id}__popup-signup" href="/create-account/cash">Sign up for online account</a>
                </div>
                <div class="${id}__cancel-btn">
                    Cancel
                </div>
            </div>
        </div>
    </div>`;
  if (loginStatus) {
    return;
  }
  document.body.insertAdjacentHTML('afterbegin', htmlStr);
  const overlay = document.querySelector(`.${id}__popup--overlay`);
  overlay.addEventListener('click', (e) => {
    const target = e.target;
    const targetMatched = (desiredMatch) =>
      target.matches(desiredMatch) || target.closest(desiredMatch);
    if (
      targetMatched(`.${id}__close-btn`) ||
      targetMatched(`.${id}__cancel-btn`) ||
      target.querySelector(`.${id}__overlay--contents`)
    ) {
      overlay.remove();
    } else if (targetMatched(`.${id}__popup-login`)) {
      fireEvent(`Test ID: ${id} Variation: 1 Label: Clicked “Login” in modal`);
    } else if (targetMatched(`.${id}__popup-signup`)) {
      fireEvent(`Test ID: ${id} Variation: 1 Label: Clicked “Sign up for an account” in modal`);
    }
  });
};

export default renderPopup;
