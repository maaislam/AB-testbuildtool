import { onUrlChange } from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  if (pathname !== '/' && pathname !== '/natcasino') {
    return;
  }
  const mrVegasLink = document.querySelector('[data-operator="Mr Vegas Casino"]');
  const mrVegasLinkCard = mrVegasLink.closest('.MuiGrid-item');
  mrVegasLinkCard.classList.add(`${ID}__mr-vegas-card`);

  const cardBanner = `
    <div class="${ID}__mr-vegas-card-banner">
      <div class="banner-text">Nu väljer spelarna</div>
      <div class="banner-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <circle cx="16" cy="16.8101" r="16" fill="url(#paint0_linear_3399_3390)"/>
      <g clip-path="url(#clip0_3399_3390)">
      <path d="M12.459 26.1432C11.215 23.5546 11.8775 22.0712 12.8336 20.6737C13.8807 19.1432 14.1506 17.6282 14.1506 17.6282C14.1506 17.6282 14.9737 18.6983 14.6444 20.3719C16.0986 18.7531 16.373 16.1741 16.1535 15.1863C19.4404 17.4834 20.8452 22.4571 18.9521 26.1432C29.0214 20.4461 21.4567 11.9214 20.1397 10.9611C20.5788 11.9213 20.662 13.5469 19.7752 14.3358C18.274 8.64322 14.5621 7.47656 14.5621 7.47656C15.0012 10.4123 12.9708 13.6224 11.013 16.0211C10.9442 14.8505 10.8711 14.0427 10.2556 12.9225C10.1174 15.0491 8.49223 16.7825 8.05214 18.9132C7.45602 21.7986 8.49867 23.9112 12.459 26.1432Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_3399_3390" x1="16" y1="0.810059" x2="16" y2="32.8101" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E15100"/>
      <stop offset="1" stop-color="#F69400"/>
      </linearGradient>
      <clipPath id="clip0_3399_3390">
      <rect width="18.6667" height="18.6667" fill="white" transform="translate(6.66675 7.47656)"/>
      </clipPath>
      </defs>
      </svg></div>
    </div>
  `;

  if (mrVegasLinkCard.querySelector(`.${ID}__mr-vegas-card-banner`)) return;

  mrVegasLinkCard.querySelector('.mui-hx8id4').insertAdjacentHTML('afterbegin', cardBanner);
};
export default () => {
  setup();
  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { pathname } = window.location;
      if (pathname !== '/' && pathname !== '/natcasino') return;

      const pageType = pathname === '/' ? 'Home' : 'Natcasino';

      const { target } = e;

      if (
        target.closest(
          '[data-operator="Mr Vegas Casino"][data-click-target="Toplist"][data-btn-type="Bonus"]'
        )
      ) {
        gaTracking(`mr vegas | Button | ${pageType}`);
      } else if (target.closest('.mui-a3ufvb[href*="/go/"]')) {
        gaTracking(`mr vegas | Logo | ${pageType}`);
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();

  onUrlChange(init);
};
