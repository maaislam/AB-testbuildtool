import searchItem from './searchItem';

const searchItems = (id, casinos) => {
  const htmlStr = `
        <div class="${id}__searchitems">
            ${casinos.map((casino) => searchItem(id, casino)).join('\n')}
        </div>
    `;
  return htmlStr;
};

export default searchItems;
