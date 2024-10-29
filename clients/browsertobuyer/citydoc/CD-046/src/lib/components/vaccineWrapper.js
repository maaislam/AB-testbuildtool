import button from './button';
import vaccine from './vaccine';
import vaccineDescription from './vaccineDescription';

const vaccineWrapper = (id, data, info) => {
  const html = `
    <div class="${id}__vaccineWrapper">
        <div class="${id}__vaccineContainer">
            ${vaccine(id, data)}    
        </div>
         ${button(id)}
         ${vaccineDescription(id, info)}
    </div>
  `;
  return html.trim();
};

export default vaccineWrapper;
