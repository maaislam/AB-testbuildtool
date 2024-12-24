import { backIcon, rightArrow } from '../assets/icons';

const mobileMenuItem = (id, category, data) => {
  const html = `
     <li class="nav__item">
        <a class="nav__link" href="#">
            ${category.title}
            ${rightArrow}
        </a>
        <ul class="nav__sub" data-parent="${category.title}">
            <li class="nav__item">
                <a class="nav__link sub__close" href="#">
                    ${backIcon}
                    <span>${category.title}</span>
                </a>
            </li>
            ${data
              .map((item) => {
                return `
                        <li class="nav__item">
                            <a class="nav__link" href="${item.href}">
                                ${item.title}
                            </a>
                        </li>  
                    `;
              })
              .join('\n')}
        </ul>
     </li>
  `;
  return html.trim();
};

export default mobileMenuItem;
