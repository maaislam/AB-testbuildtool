import cflabel from './components/cfLabel';
import getData from './helpers/getData';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default async (pageData) => {
  setup();

  const carbonMapUrl = '/carbon_map.json';
  const matinfoBomSkusUrl = '/MatinfoBomSkus.json';
  const { targetSelector, skuSelectors, attachPoint, pageType } = pageData;
  const carbonMapData = await getData(carbonMapUrl, `${ID}__carbonMap`);
  const matinfoBomSkusData = await getData(matinfoBomSkusUrl, `${ID}__matinfoBomSkus`);

  const { carbon_sku } = carbonMapData;
  console.log(`${ID}: Data`, carbon_sku, matinfoBomSkusData);
  document.body.classList.add(`${ID}__${pageType}`);

  document.querySelectorAll(targetSelector).forEach((element) => {
    const skuSelector = skuSelectors.find((item) => element.querySelector(item.selector));
    //console.log('skuSelectors', skuSelector);
    if (!skuSelector) return;
    const { selector, seperator } = skuSelector;
    const skuElems = element.querySelectorAll(selector);

    const skusArr = [];
    skuElems.forEach((skuElem) => {
      const qtyElem = skuElem.parentElement.querySelector('div:nth-child(3)');
      const qty = qtyElem?.innerText || 1;

      const skuText =
        skuElem.innerText === '' ? skuElem.closest('div').innerText : skuElem.innerText;
      const sku = seperator === '' ? skuText : skuText.split(seperator).at(1);
      const skuWithQty = {
        sku: sku.trim(),
        qty: qty * 1
      };
      console.log('skuWithQty', skuWithQty);
      !sku.includes('SKU') && skusArr.push(skuWithQty);
    });
    console.log('skus:', skusArr);

    //get reference model id
    const refModelElem = element.querySelector('.hpe-product-sku');
    const refModelIdText = refModelElem?.innerText;
    const refModelId = refModelIdText?.match(/\d.*$/)[0];

    console.log('refModelId:', refModelId);

    //check if matinfoBomSkusData has ref model id

    //const isMatinfoSku = matinfoBomSkusData.filter((item) => item.bundle_id === refModelId * 1);
    //console.log('isMatinfoSku:', isMatinfoSku);

    //if yes, get carbon_sku from matinfoBomSkusData....check with Sam

    //if no, get carbon_sku from carbonMapData
    const carbonDatas = skusArr.map((item) => carbon_sku[item.sku]).filter(Boolean);
    const carbonImpact = skusArr.reduce((acc, curr) => {
      const carbonData = carbon_sku[curr.sku];
      if (!carbonData) return acc;
      return acc + carbonData.pcf * curr.qty;
    }, 0);
    console.log('carbonDatas:', carbonDatas);
    console.log('carbonImpact:', carbonImpact);

    if (element.querySelector(`.${ID}__cflabel`) || carbonImpact <= 0) return;
    element.querySelector(attachPoint).insertAdjacentHTML('afterEnd', cflabel(ID, carbonImpact));
  });
};
