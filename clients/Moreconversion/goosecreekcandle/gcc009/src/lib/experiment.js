import setup from './services/setup';
import shared from './shared/shared';
import { usaIcon, returnIcon, truckIcon } from './assets/svg';

const { ID } = shared;

const init = () => {
  const data = [
    {
      icon: usaIcon,
      title: 'Made In USA'
    },
    {
      icon: returnIcon,
      title: '30-Day Returns'
    },
    {
      icon: truckIcon,
      title: 'Fast Shipping'
    }
  ];

  const anchorPoint = document.querySelector('.rebuy-cart__flyout-content');

  const htmlStr = `
    <div class="${ID}__uspWrapper">
      ${data?.map(({ icon, title }) => `
          <div class="${ID}__usp">
            <div class="${ID}__uspIcon">${icon}</div>
            <div class="${ID}__uspTitle">${title}</div>
          </div>
        `).join('')
      }
    </div>
  `;

  anchorPoint.insertAdjacentHTML('afterbegin', htmlStr);
};

export default () => {
  setup(); //use if needed
  init();
};
