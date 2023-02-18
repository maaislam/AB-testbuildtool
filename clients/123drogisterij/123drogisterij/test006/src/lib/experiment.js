import gaTracking from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  if (VARIATION === 'control') {
    return;
  }
  const servicepointRadio = document.querySelector(
    '[aria-labelledby="label_method_servicepoint_servicepoint label_carrier_servicepoint_servicepoint"]'
  );
  const servicepointRow = servicepointRadio?.closest('tr');
  if (!servicepointRadio || !servicepointRadio.checked) {
    servicepointRow?.classList.remove(`${ID}__servicepoint`);
    return;
  }
  //console.log('service point selected');
  servicepointRow.classList.add(`${ID}__servicepoint`);
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();

  document.body.addEventListener('click', (e) => {
    init();
  });
  document.body.addEventListener('change', (e) => {
    //console.log(e.target);
    const { target } = e;
    if (target.closest('[data-bind="click: element.selectShippingMethod"]')) {
      //const input = target.closest('tr').querySelector('td.col-method input');
      //const isInputChecked = input.checked;
      const shippingmethod = target
        .closest('tr')
        .querySelector('.col-method[id^="label_method"]').innerText;
      //console.log('shippingmethod', shippingmethod);
      const shippingcarrier = target.closest('tr').querySelector('.col-carrier').innerText;
      //console.log(isInputChecked);
      gaTracking(`Verzendmethoden - ${shippingmethod} - ${shippingcarrier}`);
    }
  });
};
