import { pollerLite } from '../helpers/utils';
import verticalUsp from '../components/verticalUsp';
import { regUspData } from '../data/data';
import { regFreeSampleIcon } from '../assets/icons';

const tradeRegistrationPage = (ID) => {
    document.body.classList.add(`${ID}__tradeRegPage`);
    document.body.insertAdjacentHTML('afterbegin', `<div style='display:none'>${regFreeSampleIcon}</div>`);

    pollerLite(['.page.messages', () => document.querySelectorAll('.form-columns-2').length > 0], () => {
        const twoCols = document.querySelectorAll('.form-columns-2');
        twoCols.forEach((item) => {
            item.classList.add('form-columns-1');
            item.classList.remove('form-columns-2');
        });

        const attachPoint = document.querySelector('.page.messages');
        const columnsElem = document.querySelector('.columns');
        columnsElem.classList.add(`${ID}__columns`);

        const formContainer = `
        <h1 class='${ID}__headerTitle'>Register for Your Luxury Trade Account</h1>
        <div class="${ID}__formContainer">
            ${columnsElem.outerHTML}
            <div class='${ID}__verticalUspContainer'>
                <div class='${ID}__verticalUspContainer-title'>Don't miss out on:</div>
                <div class="${ID}__verticalUsps">${regUspData?.map((item) => verticalUsp(ID, item)).join('')}</div>
            </div>
        </div>`;

        attachPoint.insertAdjacentHTML('afterend', formContainer);
    });
};
export default tradeRegistrationPage;
