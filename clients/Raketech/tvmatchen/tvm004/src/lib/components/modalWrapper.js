import { crossIcon } from '../assets/icons';
import stepThree from './stepThree';
import stepTwo from './stepTwo';

const modalWrapper = (id) => {
  const modal = `
        <div class="${id}__validateUserModal">
            <div class="${id}__validateUserModal-overlay"></div>
            <div class="${id}__validateUserModal-container">
                <div class="${id}__validateUserModal-container-content">
                    ${stepTwo(id)}
                    ${stepThree(id)}
                    <div class="${id}__closeModal ${id}__closeIcon">${crossIcon}</div>
                </div>
            </div>
        </div>
    `;
  return modal;
};

export default modalWrapper;
