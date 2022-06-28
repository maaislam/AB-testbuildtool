import catalogItem from './catalogItem';

const catalogs = (id, catalogsData, repName) => {
  const htmlStr = `
    <div class="${id}__catalog-swiper ${id}__invisible ${repName ? '' : `${id}__pad-top`}">
        <div class="${id}__catalog-swiper--wrapper swiper-wrapper">
            ${catalogsData.map((data) => catalogItem(id, data)).join('\n')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  `;
  return htmlStr;
};

export default catalogs;
