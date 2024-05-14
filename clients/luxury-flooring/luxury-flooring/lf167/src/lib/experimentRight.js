import { calculateBox } from './components/calculateBox';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
    console.log('right side', ID);
    const targetElement = document.querySelector('.product-info-main .product-info-cta');
    if (document.querySelector(`.${ID}__calculateBox`)) {
        document.querySelector(`.${ID}__calculateBox`).remove();
    }
    targetElement && targetElement.insertAdjacentHTML('afterend', calculateBox(ID));

    const inputElem = document.querySelector(`.${ID}__input-box input`);
    inputElem.addEventListener('input', () => {
        const areaInput = document.querySelector('.fp-calculator .fp-controls input');
        areaInput.value = inputElem.value;
        areaInput.dispatchEvent(new Event('change'));

        if (inputElem.value > '0') {
            document.querySelector(`.${ID}__calculateBox`).classList.add(`${ID}__hide`);
        }
    });

    const fpControls = document.querySelector('.fp-controls');
    const fpRequire = document.querySelector('.fp-require');
    const wastageDetails = document.querySelector('.wastage-details');
    const fpTotalAmount = document.querySelector('.fp-require-statement:not(.-bold)');

    fpRequire.insertAdjacentElement('afterbegin', fpControls);
};
