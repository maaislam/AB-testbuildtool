import { closeIcon } from '../assets/icons';

export const sizeWrapper = (id) => {
  const html = `
        <div class="${id}__sizeWrapper">
             <div class="${id}__modal-header">
                <div class="${id}__mainTitle">Select size</div>
                <div class="${id}__closeWrapper" tabindex="0">
                    ${closeIcon}
                </div>
            </div>
            <ul class="size-list">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
            </ul>
        </div>
    `;
  return html.trim();
};
