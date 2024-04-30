import { UpvIconItem } from './UpvIconItem';

export const UpvIcon = (id, data) => {
  const html = `
    <div class="${id}__upvSection">
        <div class="${id}__upvSection-content">
            ${data.map((item) => UpvIconItem(id, item)).join('\n')}
        </div>
    </div>
  `;
  return html;
};
