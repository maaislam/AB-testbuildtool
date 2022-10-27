import { getMonth } from '../helpers/utils';

const brochureTitle = (id, data, titleType = 'card') => {
  const brochureName =
    titleType === 'hero' ? `YOUR ${getMonth().toUpperCase()} BROCHURE` : data.title;
  const htmlStr = `
        <a class="${id}__brochuretitle titletype-${titleType}" 
            href="${data.live_url}/index.html" 
            data-title="${data.title}">
                <h3>${brochureName}</h3>
        </a>`;

  return htmlStr.trim();
};

export default brochureTitle;
