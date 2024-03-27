import { header } from './header';
import { form } from './form';
import { FormMessage } from './FormMessage';

export const modal = (ID) => {
  const html = `
        <div class="${ID}__modal">
            <div class="sidebar">
                ${header(ID)}
                ${form(ID)}
                ${FormMessage(ID)}
            </div>
            <div class="sidebar-overlay"></div>
            <span class="sidebar-close">&#x2715;</span>
        </div>
    `;

  return html.trim();
};
