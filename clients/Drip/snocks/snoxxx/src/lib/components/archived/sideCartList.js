import cartItem from './cartItem';

const sideCartList = (id, itemsData) => {
  const htmlStr = `
  <div class="${id}__cartItemWrapper">
    ${itemsData.map((item) => cartItem(id, item)).join('\n')}
  </div>`;

  return htmlStr;
};

export default sideCartList;
