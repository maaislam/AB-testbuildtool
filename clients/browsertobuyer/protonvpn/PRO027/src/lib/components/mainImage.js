const mainImage = (id, slide) => {
  const html = `
     <div class="${id}__mainImage swiper-slide">
       <img src="${slide.image}" alt="${slide.title}" />
     </div>
    `;
  return html.trim();
};

export default mainImage;
