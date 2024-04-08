import { header } from './header';
import { FormMessage } from './FormMessage';

export const modal = (ID) => {
  const html = `
        <div class="${ID}__modal">
            <div class="sidebar">
                <span class="sidebar-close">&#x2715;</span>
                <div class="${ID}__headerMessage">
                  ${header(ID)}
                  ${FormMessage(ID)}
                </div>
                <div class="${ID}__formContainer"></div>
            </div>
            <div class="sidebar-overlay"></div>
        </div>
    `;

  return html.trim();
};
