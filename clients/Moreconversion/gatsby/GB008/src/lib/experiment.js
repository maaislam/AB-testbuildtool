import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //Your experiment-specific code goes here
  const { href } = window.location;
  const orthopedicPrdHandle = '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe';
  const copyOrthopedicPrdHandle =
    'https://gatsbyshoes.co/products/oxford-lisse-no-stripe-orthopedic-dress-shoes-1';

  const oxfordLissePrdHandle = '/products/oxford-lisse';
  const copyOxfordLissePrdHandle = 'https://gatsbyshoes.co/products/oxford-lisse-3';

  const oxfordDressPrdHandle =
    '/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal';
  const copyOxfordDressPrdHandle =
    'https://gatsbyshoes.co/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal-3';

  if (href.includes(orthopedicPrdHandle)) {
    convert.redirect(copyOrthopedicPrdHandle);
  } else if (href.includes(oxfordLissePrdHandle)) {
    convert.redirect(copyOxfordLissePrdHandle);
  } else if (href.includes(oxfordDressPrdHandle)) {
    convert.redirect(copyOxfordDressPrdHandle);
  }
};

export default () => {
  setup();
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //
};
