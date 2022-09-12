import getBrochureIcon from '../helpers/getBrochureIcon';
import brochureTitle from './brochureTitle';

const brochureInfo = (id, data) => {
  const { iconName } = getBrochureIcon(data.title);
  const htmlStr = `<div class="${id}__brochureinfo icontype-${iconName}">
        ${brochureTitle(id, data)}
        <p class="${id}__brochurepara">${window.ag105aData[data.order_number]}</p>
        <a class="${id}__brochurebutton" 
            href="${data.live_url}"
            data-title="${data.title}">OPEN</a>
    </div>`;

  return htmlStr.trim();
};

export default brochureInfo;
