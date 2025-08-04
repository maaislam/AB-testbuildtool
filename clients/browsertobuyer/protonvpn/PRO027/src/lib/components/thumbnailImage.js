const thumbnailImage = (id, slide) => {
  const html = `
        <div class="${id}__thumbnailImage swiper-slide">
         <img src="${slide.image}" alt="${slide.title}" />
        </div>
    `;
  return html.trim();
};

export default thumbnailImage;
