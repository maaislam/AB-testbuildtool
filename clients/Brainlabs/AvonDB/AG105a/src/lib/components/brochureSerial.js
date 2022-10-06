import getBrochureIcon from '../helpers/getBrochureIcon';

const brochureSerial = (id, data) => {
  const { icon, iconName } = getBrochureIcon(data.title);
  const htmlStr = `<div class="${id}__brochureserial icontype-${iconName}">
        <div class="icon">${icon}</div>
        <div class="serial">${data.cardSerial}/${data.length}</div>
    </div>`;

  return htmlStr.trim();
};

export default brochureSerial;
