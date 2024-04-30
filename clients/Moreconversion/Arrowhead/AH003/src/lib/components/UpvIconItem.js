export const UpvIconItem = (id, { url, title }) => {
  const html = `
    <div class="${id}__upvSection-item">
        <div class="${id}__upvSection-item-icon">
            <img src="${url}" alt="${title}"/>
        </div>
        <div class="${id}__upvSection-item-text">${title}</div>
    </div>
  `;
  return html;
};
