import button from './button';
import contact from './contact';
import vaccine from './vaccine';
import vaccineDescription from './vaccineDescription';

const vaccineWrapper = (id, data, info) => {
  const html = `
    <div class="${id}__vaccineWrapper o-wrapper">
        <div class="${id}__vaccineContainer">
            <div class="${id}__vaccineTitleWrapper">
                <div class="${id}__title">${data['About the heading']}</div>
                ${button(id)}
            </div>
            <div class="${id}__vaccineContent">
              ${vaccine(id, data)}
              ${contact(id)}
            </div>       
        </div>
         ${vaccineDescription(id, info)}
    </div>
  `;
  return html.trim();
};

export default vaccineWrapper;
