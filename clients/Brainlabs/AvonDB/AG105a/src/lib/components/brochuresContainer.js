import brochureCards from './brochureCards';
import heroBrochure from './heroBrochure';

const brochureContainer = (id, datas) => {
  const numberOfBrochures = datas.length;
  const htmlStr = `<div class="${id}__brochure--container">
        ${heroBrochure(id, datas[0], numberOfBrochures)}
        ${brochureCards(id, datas.slice(1), numberOfBrochures)}
    </div>`;

  return htmlStr.trim();
};

export default brochureContainer;
