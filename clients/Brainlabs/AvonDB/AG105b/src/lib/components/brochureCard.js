/*eslint-disable object-curly-newline */
import brochureCover from './brochureCover';
import brochureInfo from './brochureInfo';
import brochureSerial from './brochureSerial';

const brochureCard = (id, data, length, index) => {
  const { cover, live_url, infos } = data;
  const { title } = infos.publication;

  const order_number = index + 2;
  const isLastCard = index + 2 === length;

  const htmlStr = `<div class="${id}__brochurecard ${isLastCard ? `${id}__last-card` : ''}">
        ${brochureSerial(id, { title, order_number, length })}
        ${brochureCover(id, { title, live_url, cover })}
        ${brochureInfo(id, { title, live_url, order_number })}
    </div>`;

  return htmlStr.trim();
};

export default brochureCard;
