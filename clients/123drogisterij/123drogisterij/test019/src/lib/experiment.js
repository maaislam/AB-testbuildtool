import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';
import { crossIcon } from './assets/icons';

const { ID, VARIATION } = shared;

const data = {
  title: 'Beter, goedkoper én comfortabeler',
  imgUrl:
    'https://www.123drogisterij.nl/media/catalog/product/cache/13420deee3e10f6f7423a99527a61b09/z/w/zwemluiers_swimmm_medium_-_online_-_zonder_maat.jpg',
  mainTitle:
    'Ontdek de onze eigen Swimmm Zwemluier! Nu verkrijgbaar in Small & Medium en profiteer direct van onze kennismakingskorting.',
  buttonText: 'Meer informatie',
  buttonLink: '/swimmm-wegwerp-zwemluiers-volwassenen',
  closeText: 'nee, vandaag niet',
  closeIcon: crossIcon
};

const init = () => {
  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID, data)); //
  }
};

export default () => {
  setup();

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__closeModal`) || target.closest(`.${ID}__closeLink`)) {
      const modalWrapper = document.querySelector(`.${ID}__modal`);
      modalWrapper.classList.remove('open');
    }
  });
  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
