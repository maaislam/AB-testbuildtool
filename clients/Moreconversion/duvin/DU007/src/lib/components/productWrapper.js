import product from './product';

const productWrapper = (id, data) => {
  const html = `
        <div class="swiper-wrapper">
            ${data.map((item) => product(id, item)).join('\n')}
        </div>
    `;
  return html.trim();
};

export default productWrapper;
