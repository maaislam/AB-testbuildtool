import { icon } from '../assets/icons';

const reviewWrapper = (id, data) => {
  const html = `
        <div class="${id}__reviewWrapper">
            <div class="${id}__reviewWrapper-container">
                <div class="${id}__reviewWrapper-icon">${icon}</div>
                <div class="${id}__reviewWrapper-title">${data.title}</div>
                <div class="${id}__reviewWrapper-author">${data.author}</div>
            </div>
        </div>
    `;
  return html.trim();
};

export default reviewWrapper;
