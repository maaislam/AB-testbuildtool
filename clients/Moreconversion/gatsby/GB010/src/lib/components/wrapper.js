import badge from './badge';
import percentage from './percentage';

const wrapper = (id, number) => {
  const html = `
        <span class="${id}__wrapper">
            ${percentage(id, number)}
            ${badge(id)}
        </span>
    `;
  return html.trim();
};

export default wrapper;
