import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange } from './helpers/utils';
import { textContainer } from './components/textContainer';

const { ID, VARIATION } = shared;

const renderDom = () => {
  const casinoMainTitle = document.querySelector('.MuiBox-root.css-ng57ac');
  const anotherTargetPoint = document.querySelector('.MuiTypography-h2.css-1amwsrq');
  if (!document.querySelector(`.${ID}__text-container.${ID}__desktop`)) {
    casinoMainTitle.insertAdjacentHTML('afterend', textContainer(ID, 'desktop'));
  }

  if (!document.querySelector(`.${ID}__text-container.${ID}__mobile`)) {
    anotherTargetPoint.insertAdjacentHTML('afterend', textContainer(ID, 'mobile'));
  }
};

const init = () => {
  setup();
  if (VARIATION === 'control') return;
  renderDom();
};

export default () => {
  const isListenerAdded = document.body.getAttribute(`${ID}__isListenerAdded`);
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('a[data-type="logo"]') && target.closest('.MuiBox-root.css-79elbk')) {
        const clickedItem = target.closest('a[data-type="logo"]');
        const { operator } = clickedItem.dataset;
        gaTracking(`${operator} | Logo | Toplist-Card`);
      } else if (
        target.closest('a[data-type="button"]') &&
        target.closest('.MuiBox-root.css-79elbk')
      ) {
        const clickedItem = target.closest('a[data-type="button"]');
        const { operator } = clickedItem.dataset;
        const text = clickedItem.textContent.trim();
        if (text.toUpperCase() === 'KOKEILE KASINOA') {
          gaTracking(`${operator} CTO | Button | Toplist-Card`);
        } else {
          gaTracking(`${operator} CTR | Button | Toplist-Card`);
        }
      } else if (target.closest(`.${ID}__btn`)) {
        const toggleBtn = target.closest(`.${ID}__btn`);
        const mainWrapper = toggleBtn.closest(`.${ID}__text-container`);
        const textElem = mainWrapper.querySelector(`.${ID}__clamp-text`);
        textElem.classList.toggle('expanded');
        toggleBtn.textContent = textElem.classList.contains('expanded')
          ? 'Lue vähemmän'
          : 'Lue lisää';
        if (textElem.classList.contains('expanded')) {
          gaTracking('Button | Read More');
        } else {
          gaTracking('Button | Read Less');
        }
      }
    });
  }

  document.body.setAttribute(`${ID}__isListenerAdded`, true);

  const experimentStart = () => {
    const intervalId = setInterval(() => {
      init();
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };

  experimentStart();

  onUrlChange(() => {
    experimentStart();
  });
};
