/*eslint-disable object-curly-newline */
import brochureCover from './brochureCover';
import brochureInfo from './brochureInfo';
import brochureSerial from './brochureSerial';

const brochureCard = (id, data, length, index) => {
  const { cover, live_url, infos } = data;
  const { title } = infos.publication;
  const isLastCard = index + 2 === length;

  const cardSerial = index + 2;

  const htmlStr = `<div class="${id}__brochurecard ${isLastCard ? `${id}__last-card` : ''}">
        ${brochureSerial(id, { title, cardSerial, length })}
        ${brochureCover(id, { title, live_url, cover })}
        ${brochureInfo(id, { title, live_url, cardSerial })}
    </div>`;

  return htmlStr.trim();
};

export default brochureCard;
