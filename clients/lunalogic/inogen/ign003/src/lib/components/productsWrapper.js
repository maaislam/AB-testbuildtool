import product from './product';

const productsWrapper = (id, data) => {
  const html = `
        <div class="${id}__productsWrapper">
            <div class="${id}__productsWrapper">
                <div class="${id}__title">Shop by machine</div>
                <div class="${id}__lists">
                    ${data.map((item) => product(id, item)).join('\n')}
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default productsWrapper;
