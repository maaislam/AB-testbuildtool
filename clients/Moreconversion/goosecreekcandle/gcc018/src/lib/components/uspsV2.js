import { checkIcon } from '../assets/svg';

const uspsV2 = (id) => {
    const htmlStr = `<div class='${id}__container'>
        <div class='usps-item'>
            <p>
                ${checkIcon}
                <span>35+ hour burn time</span>
            </p>
            <div></div>
            <p>
                ${checkIcon} 
                <span>Clean Burn</span>
            </p>
            <div></div>
            <p>
                ${checkIcon} 
                <span>Lead Free</span>
            </p>
        </div>
    </div>`;

    return htmlStr;
};
export default uspsV2;
