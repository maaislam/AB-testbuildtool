import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import initSwiper, { onUrlChange, pollerLite } from './helpers/utils';
import slider from './components/slider';

const { ID, VARIATION } = shared;

const init = () => {
  const mainElement = document.querySelector('.MuiBox-root.mui-gpcgoa');
  const sliderHeaderText = mainElement.querySelector('p').textContent.trim();
  const sliderElements = mainElement.querySelectorAll('.mui-1l35hgs');
  const modifiedSilderElements = Array.from(sliderElements).map((item) => {
    item.classList.add('swiper-slide');
    return item.cloneNode(true);
  });

  if (document.querySelector(`.${ID}__operatorSliderSection`)) {
    document.querySelector(`.${ID}__operatorSliderSection`).remove();
  }

  mainElement.insertAdjacentHTML(
    'beforebegin',
    slider(ID, sliderHeaderText, modifiedSilderElements)
  );

  initSwiper(ID);

  console.log(mainElement, 'mainElement', modifiedSilderElements);
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {});
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  setTimeout(init, 1500);

  onUrlChange(() => {
    setTimeout(init, 1500);
  });
};
