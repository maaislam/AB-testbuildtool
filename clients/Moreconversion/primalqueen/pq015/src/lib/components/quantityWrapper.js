import { getCurrentMonthName } from '../helpers/utils';

const quantityWrapper = (id) => {
  const html = `
        <div class="${id}__quantityWrapper">
            <span class="${id}__highlight_month">${getCurrentMonthName()}</span> has a high risk of selling out, <span class="${id}__highlight_number">57</span> purchases made today. 
        </div>
    `;
  return html.trim();
};

export default quantityWrapper;
