import imageItem from './imageItem';
import button from './button';

export const images = (ID, data, MIN_IMAGES_OF_PROD, className) => {
  const isShowMore = data.length >= MIN_IMAGES_OF_PROD;
  const html = `
        <div class="${ID}__images-wrapper ${className}">
            <div class="${ID}__images-container">
                ${data.map((item) => imageItem(ID, item, isShowMore, className)).join('\n')}
            </div>
            ${
              isShowMore && className === 'desktop'
                ? button(ID, '-', 'Show less images', 'less')
                : ''
            }
        </div>
    `;

  return html.trim();
};
