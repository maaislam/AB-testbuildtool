/*eslint-disable object-curly-newline */
import brochureCover from './brochureCover';
import brochureInfo from './brochureInfo';
import brochureSerial from './brochureSerial';
import brochureTitle from './brochureTitle';

const heroBrochure = (id, firstBrochureData, length) => {
  const { cover, live_url, infos, order_number } = firstBrochureData;
  const { title } = infos.publication;

  const htmlStr = `<div class="${id}__herobrochure">
            <div class="row1">
                ${brochureSerial(id, { title, order_number, length })}
                ${brochureTitle(id, { title, live_url }, 'hero')}
            </div>
            <div class="row2">
                ${brochureCover(id, { title, live_url, cover })}
                ${brochureInfo(id, { title, live_url, order_number }, 'hero')}
            </div>
        </div>`;

  return htmlStr.trim();
};

export default heroBrochure;
