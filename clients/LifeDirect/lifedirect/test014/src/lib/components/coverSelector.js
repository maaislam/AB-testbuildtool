/*eslint-disable object-curly-newline */
import { checkMark } from '../data';
import coverUsp from './coverUsp';

const coverSelector = (id, coverData, children) => {
  const { coverIcon, coverTitle, coverType, coverBtnAction, coverBtnText, uspTick, uspsData } =
    coverData;
  const childHtml = `<div class="row-2">
            ${children}
        </div>`;
  const htmlStr = `
    <div class="${id}__coverselector ${coverType}">
        <div class="row-1">
            <div class="column-1">
                <div class="${id}__coverselector--title">
                    <span class="cover-icon">${coverIcon}</span>
                    <span class="cover-title">${coverTitle}</span>
                </div>
                ${uspsData
                  .map((uspData) => coverUsp(id, { coverType, uspData, uspTick }))
                  .join('\n')}
            </div>
            <div class="column-2">
                <div class="${id}__coverselector--btn"
                 data-action="${coverBtnAction}">
                    <span class="select">${coverBtnText}</span>
                    <span class="selected">${checkMark}<span>SELECTED</span></span>
                 </div>
            </div>
        </div>
        ${children ? childHtml : ''}
    </div>`;

  return htmlStr.trim();
};

export default coverSelector;
