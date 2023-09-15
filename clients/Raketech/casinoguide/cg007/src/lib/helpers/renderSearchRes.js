import searchItem from '../components/searchItem';
import shared from '../shared/shared';

const renderSearchItems = (resultArr) => {
  const { ID } = shared;
  const searchItemsElem = document.querySelector(`.${ID}__searchitems`);
  const newSearchItemElem = resultArr.map((casino) => searchItem(ID, casino)).join('\n');
  searchItemsElem.innerHTML = newSearchItemElem;
};

export default renderSearchItems;
