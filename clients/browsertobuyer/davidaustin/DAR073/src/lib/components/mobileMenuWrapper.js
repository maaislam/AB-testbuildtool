import { backIcon, rightArrow } from '../assets/icons';
import mobileMenuItem from './mobileMenuItem';

const mobileMenuWrapper = (id, data, classes) => {
  const html = `
       <ul class="nav ${classes} ${id}__mobileMenuWrapper">
            <li class="nav__item">
            <a class="nav__link" href="#">
                ${data?.title}
                ${rightArrow}
            </a>
            <ul class="nav__sub">
                <li class="nav__item">
                    <a class="nav__link sub__close" href="#">
                        ${backIcon}
                        <span>${data?.title}</span>
                    </a>
                </li>
                ${data?.hasChildren?.map((item) => mobileMenuItem(id, item, item.hasChildren)).join('\n')}     
            </ul>
           </li>
        </ul>
    `;

  return html.trim();
};

export default mobileMenuWrapper;
