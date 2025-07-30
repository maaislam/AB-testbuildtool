import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const cartSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
<path d="M16.5 9.4375C16.4062 9.78125 16.0938 10 15.75 10H6.59375L6.8125 11H15.1875C15.6562 11 16.0312 11.4688 15.9062 11.9375L15.75 12.6875C16.3438 12.9688 16.75 13.5625 16.75 14.25C16.75 15.2188 15.9375 16 15 16C14.0312 16 13.25 15.2188 13.25 14.25C13.25 13.7812 13.4375 13.3438 13.75 13H7.21875C7.53125 13.3438 7.75 13.7812 7.75 14.25C7.75 15.2188 6.9375 16 6 16C5.03125 16 4.25 15.2188 4.25 14.25C4.25 13.625 4.59375 13.0625 5.125 12.75L2.90625 2H0.75C0.3125 2 0 1.6875 0 1.25V0.75C0 0.34375 0.3125 0 0.75 0H3.9375C4.28125 0 4.59375 0.28125 4.6875 0.625L4.96875 2H17.2188C17.7188 2 18.0625 2.46875 17.9688 2.9375L16.5 9.4375Z" fill="white"/>
</svg>`;

const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 0.669579L7 6.66958L1 0.669578" stroke="#00549E" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const getNavData = () => {
  const topItems = document.querySelectorAll('#primary-nav > li');
  return Array.from(topItems).map((topItem) => {
    const title = topItem.querySelector('a, span')?.textContent.trim();

    //Special structure for "Products"
    if (title === 'Products') {
      const submenuLinks = Array.from(topItem.querySelectorAll('.header__dropdown2 a')).map(
        (link) => ({
          text: link.textContent.trim(),
          href: link.href
        })
      );

      //Manual matching for categories
      const groupedSubmenu = [
        {
          groupTitle: 'Portable Concentrators',
          links: submenuLinks.filter((link) => /rove\s*4|rove\s*6|freedom bundle/i.test(link.text))
        },
        {
          groupTitle: 'Home/Stationary Concentrators',
          links: submenuLinks.filter((link) => /inogen at home|voxi/i.test(link.text))
        },
        {
          groupTitle: 'Parts & Accessories',
          links: submenuLinks.filter((link) => /accessories/i.test(link.text))
        }
      ];

      return {
        title,
        groupedSubmenu
      };
    }

    //Default behavior for other menus
    const submenuLinks = Array.from(topItem.querySelectorAll('.header__dropdown2 a')).map(
      (link) => ({
        text: link.textContent.trim(),
        href: link.href
      })
    );

    return {
      title,
      submenuLinks
    };
  });
};

const injectCustomHamburger = () => {
  if (document.getElementById('ab-new-hamburger')) return;

  const hamburger = document.createElement('div');
  hamburger.className = 'new-hamburger';
  hamburger.id = 'ab-new-hamburger';
  hamburger.innerHTML = '<span></span><span></span><span></span>';

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    const nav = document.getElementById('ab-custom-mobile-nav');
    const isOpen = nav.getAttribute('data-test-nav-open') === 'true';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.setAttribute('data-test-nav-open', isOpen ? 'false' : 'true');
  });

  const target = document.getElementById('shiftnav-toggle-main');
  if (target) {
    target.insertAdjacentElement('beforebegin', hamburger);
  } else {
    console.warn('#shiftnav-toggle-main not found');
  }
};

const renderCustomMobileNav = (navData) => {
  if (document.getElementById('ab-custom-mobile-nav')) return;

  const wrapper = document.createElement('div');
  wrapper.id = 'ab-custom-mobile-nav';
  wrapper.setAttribute('data-test-nav-open', 'false');
  wrapper.className = 'ab-nav-container';

  const listItems = navData
    .map((item, index) => {
      if (item.groupedSubmenu) {
        return `
        <li class="ab-nav-item">
          <button class="nav-toggle ab-nav-toggle" data-index="${index}">
            ${item.title} <span class="arrow">${arrowSvg}</span>
          </button>
          <div class="submenu ab-submenu-grouped" hidden>
            ${item.groupedSubmenu
              .map(
                (group, gIndex) => `
              <div class="ab-submenu-group">
                <button class="ab-group-toggle" data-group-toggle="${index}-${gIndex}">
                  ${group.groupTitle} <span class="arrow">${arrowSvg}</span>
                </button>
                <ul class="ab-submenu-list ab-group-list" data-group="${index}-${gIndex}" hidden>
                  ${group.links
                    .map(
                      (link) => `
                    <li><a href="${link.href}" class="ab-submenu-link">${link.text}</a></li>
                  `
                    )
                    .join('')}
                </ul>
              </div>
            `
              )
              .join('')}
          </div>

          </li>
        `;
      }

      return `
      <li class="ab-nav-item">
        <button class="nav-toggle ab-nav-toggle" data-index="${index}">
          ${item.title} <span class="arrow">${arrowSvg}</span>
        </button>
        <ul class="submenu ab-submenu-list" hidden>
          ${item.submenuLinks
            .map(
              (link) => `
            <li><a href="${link.href}" class="ab-submenu-link">${link.text}</a></li>
          `
            )
            .join('')}
        </ul>
      </li>
    `;
    })
    .join('');

  wrapper.innerHTML = `
    <ul class="ab-nav-list">
      ${listItems}
    </ul>
    <div class="nav-footer">
      <div>Inogen Rove 6</div>
      <a href="https://www.inogen.com/products/rove6-systems/" class="ab-cta-button">Shop Now ${cartSvg}</a>
    </div>
  `;

  document.body.appendChild(wrapper);
};

const initInteraction = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.nav-toggle')) {
      const submenu = e.target.nextElementSibling;
      if (submenu) submenu.hidden = !submenu.hidden;
    }

    if (e.target.matches('.ab-group-toggle, .ab-group-toggle *')) {
      const btn = e.target.closest('.ab-group-toggle');
      const targetKey = btn.getAttribute('data-group-toggle');
      const groupList = document.querySelector(`.ab-group-list[data-group="${targetKey}"]`);
      if (groupList) groupList.hidden = !groupList.hidden;
    }

    if (e.target.id === 'nav-close') {
      const nav = document.getElementById('ab-custom-mobile-nav');
      nav.style.display = 'none';
      nav.setAttribute('data-test-nav-open', 'false');
      document.getElementById('ab-new-hamburger')?.classList.remove('open');
    }
  });
};
const isMobile = () => {
  return window.innerWidth <= 768;
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  if (!isMobile()) {
    //do stuff for desktop
    console.log('This is not a mobile device, skipping mobile nav setup.');
    document.documentElement.classList.add('ab-desktop-nav');

    return;
  }

  document.documentElement.classList.add('ab-mobile-nav');

  const navData = getNavData();
  console.log('🚀 ~ navData:', navData);
  renderCustomMobileNav(navData);
  injectCustomHamburger();
  initInteraction();
};
