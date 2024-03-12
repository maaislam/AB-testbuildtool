import button from './button';

const imageItem = (ID, item, isShowMore, className) => {
  const html = `
        <div class="${ID}__image-item ${
    isShowMore && item.i === 4 && className === 'desktop'
      ? `${ID}__show-more-parent`
      : item.i > 5 && className === 'desktop'
      ? `${ID}__hide`
      : ''
  }"
         data-key="${item.i - 1}">
            <img src="${className === 'desktop' ? item.full : item.thumb}" alt="${item.caption}" />
            ${
              isShowMore && item.i === 4 && className === 'desktop'
                ? button(ID, '+', 'Show more images', 'more')
                : ''
            }
        </div>
    `;

  return html.trim();
};

export default imageItem;
