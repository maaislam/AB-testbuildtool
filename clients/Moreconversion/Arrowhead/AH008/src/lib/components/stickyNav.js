import { sizeIcon } from '../assets/svgs';

const stickyNav = (id, VARIATION, data = '') => {
    const htmlStr = `<div class='${id}__stickyNavWrapper ${id}__hide'>
        <div class='${id}__stickyNavContent'>
            ${VARIATION === '1' ? `
                <div class='${id}__stickyNavBtn'>
                    <button>${sizeIcon}Choose my size</button>
                </div>`
            : ''}
            ${VARIATION === '2' ? `
                <div class='${id}__stickyNavText'>
                    <p class='${id}__name'>${data?.name}</p>
                    <p class='${id}__price'>${data?.price}</p>
                </div>
                <div class='${id}__stickyNavBtn'>
                    <button>Choose size</button>
                </div>`
            : ''}
        </div>
    </div>`;

    return htmlStr;
};
export default stickyNav;
