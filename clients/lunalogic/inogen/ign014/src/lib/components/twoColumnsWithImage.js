import { roundTickIcon } from '../assets/icons';

const twoColumnsWithImage = (id, data) => {
  const html = `
        <div class="${id}__twoColumnsImageWrapper">
            <div class="${id}__twoColumnsInner">
                <div class="${id}__twoColumnsLeft">
                   <div class="${id}__imageWrapper">
                       <img src="${data.imageLink}" alt="Image" />
                   </div>
                </div>
                <div class="${id}__twoColumnsRight">
                    <div class="${id}__twoColumnsRightInner">
                        ${data.items
                          .map((list) => {
                            return `
                                <div class="${id}__item">
                                    <div class="${id}__icon">${roundTickIcon}</div>
                                    <div class="${id}__text">${list.title}</div>
                                </div>
                            `;
                          })
                          .join('\n')}
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default twoColumnsWithImage;
