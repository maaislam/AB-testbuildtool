import setup from './services/setup';

const init = () => {
  const extractNumberFromString = (str) => {
    //Remove non-numeric characters except for commas and periods
    let numericString = str.replace(/[^0-9.,]/g, '');

    //Remove commas if necessary (to handle cases like 10,7010.00)
    numericString = numericString.replace(/,/g, '');

    //Parse the extracted numeric string to a floating-point number
    const extractedNumber = parseFloat(numericString);

    return extractedNumber;
  };
  const priceText = document.querySelector('[data-product-price]').innerText;
  const priceNum = extractNumberFromString(priceText);

  const pricePerTerm = priceNum / 4;

  const formatPrice = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(number);

  const pricePerTermFormatted = formatPrice(pricePerTerm);
  const varIdElem = document.querySelector('[data-product-select] option[selected="selected"]');
  const varId = varIdElem.value;

  const atcForm = document.querySelector('[id^="AddToCartForm-template"]');
  //remove if already exists
  const existing = document.querySelector('shopify-payment-terms');
  if (existing) {
    existing.remove();
  }
  atcForm.insertAdjacentHTML(
    'afterend',
    `<shopify-payment-terms style="display:block;margin-top:12px;" variant-id="${varId}" shopify-meta="{&quot;type&quot;:&quot;product&quot;,&quot;variants&quot;:[{&quot;id&quot;:${varId},&quot;price_per_term&quot;:&quot;${pricePerTermFormatted}&quot;,&quot;full_price&quot;:&quot;${priceText}&quot;,&quot;eligible&quot;:true,&quot;available&quot;:true}],&quot;min_price&quot;:&quot;$50.00&quot;,&quot;max_price&quot;:&quot;$30,000.00&quot;,&quot;financing_plans&quot;:[{&quot;min_price&quot;:&quot;$50.00&quot;,&quot;max_price&quot;:&quot;$149.99&quot;,&quot;terms&quot;:[{&quot;apr&quot;:0,&quot;loan_type&quot;:&quot;split_pay&quot;,&quot;installments_count&quot;:4}]},{&quot;min_price&quot;:&quot;$150.00&quot;,&quot;max_price&quot;:&quot;$999.99&quot;,&quot;terms&quot;:[{&quot;apr&quot;:0,&quot;loan_type&quot;:&quot;split_pay&quot;,&quot;installments_count&quot;:4},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:3},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:6},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:12}]},{&quot;min_price&quot;:&quot;$1,000.00&quot;,&quot;max_price&quot;:&quot;$30,000.00&quot;,&quot;terms&quot;:[{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:3},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:6},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:12}]}],&quot;installments_buyer_prequalification_enabled&quot;:false,&quot;seller_id&quot;:null}"></shopify-payment-terms>`
  );
};

export default () => {
  setup();
  init();

  const varSelect = document.querySelector('[data-product-select]');

  varSelect.addEventListener('change', () => {
    setTimeout(() => {
      init();
    }, 500);
  });
};
