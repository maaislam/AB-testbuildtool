import button from './button';

const description = (id, data) => {
  const html = `
        <div class="${id}__description">
          <div>
            ${data
              .map((item) => {
                return `
                <p class="${id}__text">${item}</p>
              `;
              })
              .join('\n')}
          </div>   
        </div>
    `;
  return html.trim();
};

export default description;
