const imageItem = (ID, item, isShowMore, className) => {
  let classes = `${ID}__image-item`;
  if (isShowMore && item.i > 5 && className === 'desktop') {
    classes += ` ${ID}__hide`;
  }

  const type = item.type === 'video' ? 'video' : 'image';
  const imageSrc = className === 'desktop' ? item.full : item.thumb;

  return `
    <div class="${classes}" data-key="${item.i - 1}" data-type="${type}">
      <img src="${imageSrc}" alt="${item.caption}" />
    </div>
  `.trim();
};

export default imageItem;
