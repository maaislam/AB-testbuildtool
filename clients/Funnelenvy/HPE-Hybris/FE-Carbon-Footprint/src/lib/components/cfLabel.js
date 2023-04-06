import { getLanguageCode } from '../helpers/utils';
import langConfig from '../languageConfig';

const cflabel = (id, totalCf) => {
  const htmlStr = `
    <div class="${id}__cflabel">
        <span class="prefix">${langConfig[getLanguageCode()]['Carbon Footprint']}</span>
        <span class="cf-data"> ${Math.round(totalCf)} kg CO2-eq</span>
    </div>`;

  return htmlStr;
};

export default cflabel;
