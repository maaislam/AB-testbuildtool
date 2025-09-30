import { leafIcon } from '../assets/icons';

const comparisonStr = (id, data) => {
  const html = `
        <div class="${id}__comparisonWrapper">
            <div class="${id}__comparisonInner">
                <div class="${id}__comparisonLeft">
                    <div class="${id}__comparisonLeftInner">
                        <div class="${id}__comparisonLeafIcon">
                            ${leafIcon}
                        </div>
                        <div class="${id}__comparisonTitle">${data.title}</div>
                        <div class="${id}__comparisonMainWeight">${data.mainWeight}</div>
                        <div class="${id}__comparisonSubtext">${data.subtext}</div>
                    </div>
                </div>
                <div class="${id}__comparisonRight">
                   <div class="${id}__comparisonRightInner">
                        ${data.items
                          .map((list) => {
                            return `
                                <div class="${id}__comparisonItem">
                                    <div class="${id}__comparisonItemTitle">${list.item}</div>
                                    <div class="${id}__comparisonItemWeight">${list.weight}</div>
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

export default comparisonStr;
