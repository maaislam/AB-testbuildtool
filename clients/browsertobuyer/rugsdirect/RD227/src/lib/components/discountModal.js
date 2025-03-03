import { modalCrossIcon } from '../assets/icons';
import desktopSuccessDiscountMsg from './desktopSuccessDiscountMsg';
import mobileSuccessDiscountMsg from './mobileSuccessDiscountMsg';

const discountModal = (id) => {
  const html = `
         <div class="${id}__modal">
            <div class="${id}__modal-overlay"></div>
            <div class="${id}__modal-container">
                <div class="${id}__modal-content">
                    <button class="${id}__modal-close">${modalCrossIcon}</button>
                    <div class="${id}__modal-body ${id}__desktop">
                        <div class="${id}__modal-left">
                            <div class="${id}__modal-discount-textWrapper">
                                <div class="${id}__modal-discount-heading">Extra</div>
                                <div class="${id}__modal-discount-discount">10% OFF</div>
                                <div class="${id}__modal-discount-small-text">everything</div>
                            </div>
                            <div class="${id}__modal-discount-code__label-point"></div>
                        </div>
                        <div class="${id}__modal-right">
                            <p class="${id}__modal-right-heading">Sign up to our mailing list to get an instant <strong>10% off</strong> everything on site</p>
                            <input type="email" class="${id}__modal-input ${id}__input" placeholder="Your email"/>
                             <div class="${id}__error ${id}__hide">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="oct-icon oct-signup__error__icon" aria-hidden="true" aria-label="" style="height: 20px; width: 20px; fill: black;"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm.55-4.5v4h-1v-4h1z" fill="#D8221F" fill-rule="evenodd"></path></svg>
                                <div class="${id}__errorMessage">
                                </div>
                            </div>
                            <button class="${id}__modal-button ${id}__claimDiscountBtn">Claim Discount</button>
                            <p class="${id}__modal-agreement">By signing up you agree to receive occasional emails and offers from Rugs Direct</p>
                            <span class="${id}__modal-no-thanks">No Thanks</span>
                        </div>
                        ${desktopSuccessDiscountMsg(id)}
                    </div>
                    <div class="${id}__modal-body ${id}__mobile">
                        <div class="${id}__modal-mobile-discount-code__label-point-wrapper">
                            <div class="${id}__modal-mobile-discount-code__label-point"></div>
                        </div>
                        <div class="${id}__mobile-modal-content">
                            <div class="${id}__modal-discount-mobile-heading">Extra 10% off everything</div>
                            <p class="${id}__modal-right-mobile-heading">Sign up to our mailing list to get an instant <strong>10% off</strong> everything on site</p>
                            <input type="email" class="${id}__modal-mobile-input ${id}__input" placeholder="Your email"/>
                            <div class="${id}__error ${id}__hide">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="oct-icon oct-signup__error__icon" aria-hidden="true" aria-label="" style="height: 20px; width: 20px; fill: black;"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm.55-4.5v4h-1v-4h1z" fill="#D8221F" fill-rule="evenodd"></path></svg>
                                <div class="${id}__errorMessage">
                                </div>
                            </div>
                            <button class="${id}__modal-mobile-button ${id}__claimDiscountBtn">Claim Discount</button>
                            <p class="${id}__modal-mobile-agreement">By signing up you agree to receive occasional emails and offers from Rugs Direct</p>
                            <span class="${id}__modal-no-thanks-mobile">No Thanks</span>
                        </div>
                        ${mobileSuccessDiscountMsg(id)}
                    </div>
                </div>
            </div>
        </div>
      `;
  return html;
};

export default discountModal;
