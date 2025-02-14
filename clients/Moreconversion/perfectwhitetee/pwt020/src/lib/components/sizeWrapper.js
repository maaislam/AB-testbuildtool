import { closeIcon } from '../assets/icons';

export const sizeWrapper = (id, data) => {
    const html = `
        <div class="${id}__sizeWrapper">
             <div class="${id}__modal-header">
                <div class="${id}__mainTitle">Select size</div>
                <div class="${id}__closeWrapper" tabindex="0">
                    ${closeIcon}
                </div>
            </div>
            <ul class="size-list">
                ${data.map((item) => `<li class='${id}__mobile-size-list' data-variant-id="${item.variantId}">${item.size}</li>`).join('')}
            </ul>
        </div>
    `;
    return html.trim();
};
