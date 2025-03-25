import { underlayRules } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const getUnderlay = (rugWidth, rugLength) => {
  //Step 1: filter out the rules that match the rug width
  const matchedWidthRules = underlayRules.filter((rule) => {
    return rule.maxWidth === null || rugWidth <= rule.maxWidth;
  });

  //Step 2: filter out the rules that match the rug length from the matched width rules
  for (let i = 0; i < matchedWidthRules.length; i++) {
    const rule = matchedWidthRules[i];
    const lengthMatch = rule.maxLength === null || rugLength <= rule.maxLength;
    if (lengthMatch) {
      console.log(`Rug Size: ${rugWidth}x${rugLength}`);
      console.log(`Underlay: ${rule.variantName}`);
      console.log(`Variant ID: ${rule.variantId}`);
      console.log(`Price: £${rule.price}`);
      return rule;
    }
  }

  console.log(`No underlay found for rug size ${rugWidth}x${rugLength}`);
  return null;
};

const getSelectedRugData = () => {
  const selectedInput = document.querySelector('input[name="id"]:checked');
  if (!selectedInput) return null;

  const rugWidth = parseInt(selectedInput.getAttribute('data-width'), 10);
  const rugLength = parseInt(selectedInput.getAttribute('data-length'), 10);
  const rugPriceInPence = parseInt(selectedInput.getAttribute('data-price'), 10);
  const rugPrice = rugPriceInPence / 100;

  return {
    width: rugWidth,
    length: rugLength,
    price: rugPrice
  };
};

const updateUnderlayModalPrice = () => {
  const rugData = getSelectedRugData();
  if (!rugData) return;

  const underlay = getUnderlay(rugData.width, rugData.length);
  if (!underlay) return;

  const rugOnlyPrice = rugData.price;
  const underlayPrice = underlay.price;
  const totalPrice = (rugOnlyPrice + underlayPrice).toFixed(2);

  //Update DOM using correct selectors
  const rugOnlyPriceEl = document.querySelector('[data-modal-product-price]');
  const rugWithUnderlayPriceEl = document.querySelector('[data-modal-underlay-price]');

  if (rugOnlyPriceEl) rugOnlyPriceEl.textContent = `£${rugOnlyPrice.toFixed(2)}`;
  if (rugWithUnderlayPriceEl) rugWithUnderlayPriceEl.textContent = `£${totalPrice}`;

  console.log('Modal price updated!');
  console.log(`Rug only: £${rugOnlyPrice.toFixed(2)}`);
  console.log(`Rug + Underlay: £${totalPrice}`);
};

const init = () => {
  updateUnderlayModalPrice();
};

export default () => {
  setup();

  init();
};
