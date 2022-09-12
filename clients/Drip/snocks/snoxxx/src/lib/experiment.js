// //import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
// import { observeDOM } from '../../../../../../globalUtil/util';
// import cartLineTootip from './components/cartLineTooltip';

// import renderPulseButton from './components/pulseButton';
// import { tooltipPosConfig, wordingBubble } from './configs';

// import getCart from './helpers/getCart';
// import { isCartPage } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = (mutation) => {
  console.log(mutation);
};

export default () => {
  init();
  // const mutObsConfig = {
  //   childList: true,
  //   attributes: true,
  //   attributeFilter: ['aria-hidden'],
  //   attributeOldValue: true
  // };

  // observeDOM(`[data-section-type="cart"] ${isCartPage ? '.PageContent' :
};
