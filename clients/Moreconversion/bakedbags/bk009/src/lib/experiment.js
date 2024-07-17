import { widgetWrapper } from './components/widgetWrapper';
import { widgetData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const init = () => {
  //Add your custom code here

  if (!document.querySelector('.custom_widget_wrapper')) {
    document
      .querySelector('.paymentButtonsWrapper')
      .insertAdjacentHTML('afterend', widgetWrapper(widgetData));
  }
};

export default () => {
  setup();

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') return; //

  init(); //use if needed
};
