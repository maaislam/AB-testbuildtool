import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const productType = [
    'broekje',
    'onderlegger',
    'slip',
    'stoelbeschermer'
  ];
  const productTypeText = document.querySelector('[data-th="Type product"]').textContent.trim().toLowerCase();
  const isProductType = productType.includes(productTypeText);

  if (!isProductType) return;

  const mobileAnchorPoint = document.querySelector('.custpro .product.mob-name-cust');
  const desktopAnchorPoint = document.querySelector('.page-title');

  let htmlStr = '';

  if (productTypeText.includes('broekje') || productTypeText.includes('slip')) {
    const absorptievermogen = document.querySelector('[data-th="Absorptievermogen"]').closest('tr').querySelector('th').textContent;
    const absorptievermogenValue = document.querySelector('[data-th="Absorptievermogen"]').textContent;

    const heupomvang = document.querySelector('[data-th="Heupomvang (cm)"]').closest('tr').querySelector('th').textContent;
    const heupomvangValue = document.querySelector('[data-th="Heupomvang (cm)"]').textContent;

    const opnamecapaciteit = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').closest('tr').querySelector('th').textContent;
    const opnamecapaciteitValue = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').textContent;

    htmlStr = `<div class='${ID}__productAttributes'>
    <span>${opnamecapaciteitValue} ${opnamecapaciteit}</span> |
    <span>${absorptievermogenValue} ${absorptievermogen}</span> | 
    <span>${heupomvangValue} ${heupomvang}</span>
  </div>`;
  } else if (productTypeText.includes('onderlegger') || productTypeText.includes('stoelbeschermer')) {
    const verpakking = document.querySelector('[data-th="Verpakking"]').closest('tr').querySelector('th').textContent;
    const verpakkingValue = document.querySelector('[data-th="Verpakking"]').textContent;

    const maat = document.querySelector('[data-th="Maat"]').closest('tr').querySelector('th').textContent;
    const maatValue = document.querySelector('[data-th="Maat"]').textContent;

    const opnamecapaciteit = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').closest('tr').querySelector('th').textContent;
    const opnamecapaciteitValue = document.querySelector('[data-th="Opnamecapaciteit (ml)"]').textContent;

    htmlStr = `<div class='${ID}__productAttributes'>
      <span>${opnamecapaciteitValue} ${opnamecapaciteit}</span> |
      <span>${verpakkingValue} ${verpakking}</span> | 
      <span>${maatValue} ${maat}</span>
    </div>`;
  }

  if (!document.querySelector(`.${ID}__productAttributes`)) {
    mobileAnchorPoint.insertAdjacentHTML('afterend', htmlStr);
    desktopAnchorPoint.insertAdjacentHTML('afterend', htmlStr);
  }
};

export default () => {
  setup();

  init();
};
