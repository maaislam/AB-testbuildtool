const slider = (id, text, data) => {
  const html = `
    <div class="${id}__operatorSliderSection">
        <p>${text}</p>
        <div class="swiper ${id}__swiper">
            <div class="swiper-wrapper">
                ${data.map((item) => item.outerHTML).join('\n')}
            </div>
            <div class="swiper-pagination"></div>

        </div>
    </div>
  `;
  return html.trim();
};

export default slider;
