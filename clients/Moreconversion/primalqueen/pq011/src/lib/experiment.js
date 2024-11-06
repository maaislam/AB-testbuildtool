import setup from './services/setup';
import shared from './shared/shared';
import optionWrapper from './components/optionWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const packageBoxesWrapper = document.querySelector('.join_package_box');
  const subscribeBox = packageBoxesWrapper.querySelector('.package1');
  const oneTimeBox = packageBoxesWrapper.querySelector('.package2');
  const subscribeData = {
    title: 'Subscribe & Save',
    sellPrice: subscribeBox.querySelector('.price_text2 span').nextSibling.textContent,
    comparePrice: subscribeBox.querySelector('.price_text2 span').textContent,
    url: subscribeBox.querySelector('a.common_btn').href,
    value: 'subscribe'
  };

  const oneTimeData = {
    title: 'One Time Purchase',
    sellPrice: oneTimeBox.querySelector('.price_text2 span').nextSibling.textContent,
    comparePrice: oneTimeBox.querySelector('.price_text2 span').textContent,
    url: oneTimeBox.querySelector('a.common_btn').href,
    value: 'onetime'
  };

  if (!document.getElementById(`${ID}__subscribe`)) {
    subscribeBox
      .querySelector('.pkage_list')
      .insertAdjacentHTML('beforebegin', optionWrapper(ID, subscribeData));
  }

  if (!document.getElementById(`${ID}__onetime`)) {
    subscribeBox
      .querySelector('.comn_btn_box')
      .insertAdjacentHTML('beforebegin', optionWrapper(ID, oneTimeData));
  }

  const radioSubscribe = document.getElementById('subscribe');
  const radioOneTime = document.getElementById('onetime');

  const handleRadioChange = (event) => {
    const targetElement = event.target;
    const wrapper = targetElement.closest(`.${ID}__radio-container`);
    const addToCartUrl = wrapper.dataset.url;
    const button = subscribeBox.querySelector('a.common_btn');
    button.href = addToCartUrl;
  };

  radioSubscribe.removeEventListener('change', handleRadioChange);
  radioSubscribe.addEventListener('change', handleRadioChange);

  radioOneTime.removeEventListener('change', handleRadioChange);
  radioOneTime.addEventListener('change', handleRadioChange);
};

export default () => {
  setup();

  init();
};
