import product from './product';

const wrapper = (id, data) => {
  const html = `
    <div class="${id}__recentlyViewed page-width">
        <h1>Recently viewed</h1>
        <div class="${id}__productsContainer grid">
            ${data.map((item) => product(id, item[0])).join('\n')}
        </div>
    </div>
  `;
  return html.trim();
};

export default wrapper;
