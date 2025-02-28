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
                            <input type="email" class="${id}__modal-input" placeholder="Your email"/>
                            <button class="${id}__modal-button">Claim Discount</button>
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
                            <input type="email" class="${id}__modal-mobile-input" placeholder="Your email"/>
                            <button class="${id}__modal-mobile-button">Claim Discount</button>
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
