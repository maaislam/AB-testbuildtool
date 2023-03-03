import sizeDropdownItem from './sizeDropdownItem';

const sizeDropdownItems = (id, dpData) => {
  const htmlStr = `
        <div class="${id}__sizedrodownitems ${id}__hide">
            ${dpData.map((item, index) => sizeDropdownItem(id, item, index)).join('\n')}
        </div>`;

  return htmlStr.trim();
};

export default sizeDropdownItems;
