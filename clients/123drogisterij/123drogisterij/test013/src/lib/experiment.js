import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const mobileAnchorPoint = document.querySelector('.custpro .product.mob-name-cust');
  const desktopAnchorPoint = document.querySelector('.page-title');

  const absorptievermogen = document.querySelector('[data-th="Absorptievermogen"]').closest('tr').querySelector('th').textContent;
  const absorptievermogenValue = document.querySelector('[data-th="Absorptievermogen"]').textContent;

  const heupomvang = document.querySelector('[data-th="Heupomvang (cm)"]').closest('tr').querySelector('th').textContent;
  const heupomvangValue = document.querySelector('[data-th="Heupomvang (cm)"]').textContent;

  const opnamecapaciteit = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').closest('tr').querySelector('th').textContent;
  const opnamecapaciteitValue = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').textContent;

  const htmlStr = `<div class='${ID}__productAttributes'>
    <span>${absorptievermogenValue} ${absorptievermogen}</span> | 
    <span>${heupomvangValue} ${heupomvang}</span> | 
    <span>${opnamecapaciteitValue} ${opnamecapaciteit}</span>
  </div>`;

  if (!document.querySelector(`.${ID}__productAttributes`)) {
    mobileAnchorPoint.insertAdjacentHTML('afterend', htmlStr);
    desktopAnchorPoint.insertAdjacentHTML('afterend', htmlStr);
  }
};

export default () => {
  setup();

  init();
};
