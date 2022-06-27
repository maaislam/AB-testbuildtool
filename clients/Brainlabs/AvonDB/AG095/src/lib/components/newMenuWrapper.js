import catalogs from './catalogs';
import menubar from './menubar';
import repInfo from './repInfo';

const newMenuWrapper = (id, iconData, cartCount, cataData) => {
  const { repName, catalogData } = cataData;
  const htmlStr = `
        <div class="${id}__slide--wrapper">
        ${repName ? repInfo(id, repName) : ''}
        ${catalogs(id, catalogData, repName)}
        </div>
        <div class="${id}__newmenuwrapper">
        ${menubar(id, iconData, cartCount)}
        </div>`;

  return htmlStr;
};

export default newMenuWrapper;
