import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange, pollerLite } from './helpers/utils';
import subsButton from './components/subsButton';
import subsribeModal from './components/subsribeModal';

const { ID, VARIATION } = shared;

const getDivPosition = (iframeSelector, divSelector) => {
  const iframe = document.querySelector(iframeSelector);
  if (!iframe) return console.error('Iframe not found');

  const iframeRect = iframe.getBoundingClientRect();
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const targetDiv = iframeDocument.querySelector(divSelector);

  if (!targetDiv) return console.error('Div not found inside iframe');

  const divRect = targetDiv.getBoundingClientRect();

  //Calculate absolute position relative to the main document
  const absoluteX = iframeRect.left + divRect.left;
  const absoluteY = iframeRect.top + divRect.top;

  return {
    x: absoluteX,
    y: absoluteY
  };
};

const insertElementAtPosition = (x, y) => {
  const newElement = document.createElement('div');
  newElement.classList.add(`${ID}__fakeCrossButton`);

  //Style the element
  Object.assign(newElement.style, {
    left: `${x}px`,
    top: `${y}px`
  });

  if (document.querySelector(`.${ID}__fakeCrossButton`)) {
    document.querySelector(`.${ID}__fakeCrossButton`).remove();
  }

  document.body.appendChild(newElement);
};

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('p')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.includes(searchString));
};

const renderSubsButton = () => {
  const noOddsElements = captureElementsContainingString('No odds available');
  if (noOddsElements.length > 0) {
    noOddsElements.forEach((noOddsElement) => {
      const noOddsWrapper = noOddsElement.closest('.MuiBox-root');
      noOddsWrapper.classList.add(`${ID}__noOddsWrapper`);
      const subscribeButton = noOddsWrapper.nextElementSibling;
      if (subscribeButton) {
        subscribeButton.remove();
      }
      noOddsWrapper.insertAdjacentHTML('afterend', subsButton(ID));
    });
  }
};

const init = () => {
  //const oddsOptionsConatiner = document.querySelector('.MuiBox-root.mui-1smddtb');
  renderSubsButton();

  pollerLite([".ab-iam-root[role='complementary'] iframe"], () => {
    const formIframe = document.querySelector(".ab-iam-root[role='complementary'] iframe");
    const wrapper = formIframe.closest('.ab-iam-root');
    const position = getDivPosition('.ab-in-app-message', '.braze-modal__close-btn');
    if (position) {
      insertElementAtPosition(position.x, position.y);
    }
  });

  observeDOM('.MuiStack-root.mui-10kro7q', (mutation) => {
    const { addedNodes } = mutation;
    if (addedNodes.length > 0) {
      console.log('applied');
      renderSubsButton();
    }
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed
  const clickHandler = (e) => {
    const { target } = e;
    console.log(target);
    if (target.closest(`.${ID}__subsButton`)) {
      e.preventDefault();
      document.body.classList.add(`${ID}__modalShow`);
    } else if (target.closest(`.${ID}__fakeCrossButton`)) {
      document.body.classList.remove(`${ID}__modalShow`);
    }
  };

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;
  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();

  onUrlChange(() => {
    pollerLite(['.MuiBox-root.mui-1smddtb'], () => {
      init();
    });
  });
};
