/*eslint-disable object-curly-newline */

import { getCookie } from '../../../../../../../globalUtil/util';

const headers = {
  accept: '*/*',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
  authorization: `Bearer ${getCookie('access_token')}`,
  bruid2: getCookie('_br_uid_2'),
  'content-type': 'application/json',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
  'sec-ch-ua-mobile': '?0',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'x-data-consumer-name': 'TP-WEB',
  'x-tp-checkout-new': 'true',
  'x-tp-request-id': '24fb997c-466b-425f-8bef-e388c5996eab',
  'x-tp-session-id': getCookie('x-tp-session-id')
};

export const isPDP = () => {
  return !!document.querySelector('[data-test-id="pdp-wrapper"]');
};

export const isMobile = () => window.innerWidth < 767;

export const getItemData = () => {
  const { products } = window;
  const quantityWrapperVal = isMobile()
    ? document.querySelector('[class^="ProductQuantity__QuantityWrapper"]')?.childNodes[0].nodeValue
    : document.querySelector('[data-test-id="qty-input"] > input')?.value;

  const quantity = parseInt(quantityWrapperVal);
  return products.map((product) => {
    return {
      productCode: product.sku,
      quantity
    };
  });
};

export const getCustomerLocation = () => {
  //No location set?
  const preselectedDeliveryAddress = JSON.parse(localStorage.getItem('preselectedDeliveryAddress'));
  const collectionBranch = JSON.parse(localStorage.getItem('collectionBranch'));

  const deliveryPostcode = preselectedDeliveryAddress
    ? preselectedDeliveryAddress.postalCode
    : false;
  const collectionBranchId = collectionBranch ? collectionBranch.code : false;

  if (!deliveryPostcode || !collectionBranchId) return false;
  return {
    deliveryPostcode,
    collectionBranchId
  };
};

export const getEligibility = async (items, customerLocation) => {
  const response = await fetch('https://www.travisperkins.co.uk/graphql?op=productEligibility', {
    headers,
    referrer: window.location.href,
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'POST',
    mode: 'cors',
    body: `{"operationName":"productEligibility","variables":{"items":${JSON.stringify(
      items
    )},"customerLocation": ${JSON.stringify(
      customerLocation
    )}},"query":"query productEligibility($items: [ItemEntryInput], $customerLocation: CustomerLocationInput) {\\n  productEligibility(items: $items, customerLocation: $customerLocation) {\\n    item {\\n      productCode\\n      quantity\\n      __typename\\n    }\\n    collectionEligibility {\\n      status\\n      statusReason\\n      minimumOrderQuantity\\n      __typename\\n    }\\n    deliveryEligibility {\\n      status\\n      statusReason\\n      type\\n      estimatedDate\\n      supplierLeadTimeDays\\n      cutOffTime\\n      minimumOrderQuantity\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}`,
    credentials: 'include'
  });

  const jsonData = await response.json();

  return jsonData.data.productEligibility || {};
};

export const removeExisting = (elmSelector) => {
  document.querySelectorAll(elmSelector).forEach((item) => {
    item?.remove();
  });
};
