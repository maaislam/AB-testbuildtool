import { closeIcon } from '../assets/svgs';

const reviewModal = (id) => {
  const modal = `
        <div class="${id}__reviewModal">
            <div class="${id}__reviewModal-overlay"></div>
            <div class="${id}__reviewModal-container">
                <div class="${id}__reviewModal-wrapper">
                </div>
                <div class="${id}__reviewCloseWrapper">${closeIcon}</div>
                <span class="${id}__linkButton ${id}__reviewsForModal">Read more reviews</span>
            </div>
        </div>
    `;
  return modal;
};

export default reviewModal;
