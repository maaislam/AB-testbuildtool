const mainGallery = (id, data) => {
  const html = `
    <div class="swiper ${id}__mySwiper2">
        <div class="swiper-wrapper">
            ${data
              .map((item) => {
                return `
                    <div class="swiper-slide">
                        <img src="${item}" />
                    </div>
                `;
              })
              .join('\n')}
        </div>
    </div>
  `;
  return html.trim();
};

export default mainGallery;
