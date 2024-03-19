import slideTemplate from './slide';

const heroSection = (id, VARIATION, slideInfo) => {
  const htmlString = `
    <section class="${id}__hero">
      <div class="${id}__slider-section">
      <div class="swiper ${id}__swiper">
        <div class="swiper-wrapper">
          ${slideInfo
            .sort((a, b) => a.order - b.order)
            .map((slide, index) => slideTemplate(id, VARIATION, slide, index))
            .join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      </div>
      <div class="${id}__hero-sub">
        <div class="${id}__hero-sub-heading">
          JOGOS DE CAÇA-NÍQUEL GRÁTIS
        </div>
        <ul class="${id}__hero-sub-usplist">
          <li class="${id}__hero-sub-usplist-item">
            Encontre os melhores cassinos online
          </li>
          <li class="${id}__hero-sub-usplist-item">
            Receba ofertas de bônus exclusivas
          </li>
          <li class="${id}__hero-sub-usplist-item">
            Jogue os caça-níqueis mais populares de graça
          </li>
        </ul>
      </div>
    </section>
  `;

  return htmlString;
};

export default heroSection;
