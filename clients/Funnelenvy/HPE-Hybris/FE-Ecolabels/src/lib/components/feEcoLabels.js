import { ecoLabelConfig } from '../pageConfigs';
import feLabel from './feEcoLabel';

const feEcoLabels = (id, skuData) => {
  const htmlStr = `
    <div class="${id}__container ">
      ${ecoLabelConfig
        .map((label) => (skuData[label.name] === 'YES' ? feLabel(id, label) : ''))
        .join('\n')} 
    </div>
    `;

  return htmlStr.trim();
};

export default feEcoLabels;
