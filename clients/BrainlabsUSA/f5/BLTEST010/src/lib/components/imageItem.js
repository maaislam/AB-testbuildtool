const imageItem = (id, { imageSrc, altText }) => {
  const htmlStr = `<div class="${id}__imageItem swiper-slide">
        <div class="image-wrapper">
            <img src="${imageSrc}"
             alt="${altText}">
        </div>
    </div>`;
  return htmlStr.trim();
};

export default imageItem;
