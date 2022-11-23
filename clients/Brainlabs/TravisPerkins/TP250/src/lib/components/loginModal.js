import { closeIcon, promoLabel } from '../asset';

const loginModal = (id) => {
  const htmlStr = `
    <div class="${id}__popup--overlay">
        
        <div class="${id}__overlay--contents">
            <div class="${id}__close-btn">${closeIcon}</div>
            <div class="headline">
                <div class="icon">
                    ${promoLabel}
                </div>
                <div class="text">
                    UP to 20% off this Black friday for travis perkins account holders only.
                </div>
            </div>
            <div class="paragraph">Please login or sign up to create an online account to access this discount.</div>
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

  return htmlStr;
};

export default loginModal;
