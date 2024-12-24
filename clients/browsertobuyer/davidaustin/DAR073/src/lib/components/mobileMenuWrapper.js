import { backIcon, rightArrow } from '../assets/icons';
import mobileMenuItem from './mobileMenuItem';

const mobileMenuWrapper = (id, data) => {
  const html = `
       <ul class="nav ${id}__mobileMenuWrapper">
            <li class="nav__item">
            <a class="nav__link" href="#">
                Roses
                ${rightArrow}
            </a>
            <ul class="nav__sub">
                <li class="nav__item">
                    <a class="nav__link sub__close" href="#">
                        ${backIcon}
                        <span>Roses</span>
                    </a>
                </li>
                ${data.map((item) => mobileMenuItem(id, item, item.hasChildren)).join('\n')}     
            </ul>
           </li>
        </ul>
    `;

  return html.trim();
};

export default mobileMenuWrapper;
