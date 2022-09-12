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

export const getBrnchDeliveryDays = async (postcode, numOfDays = 24) => {
  const payload = {
    operationName: 'branchCalendar',
    variables: {
      numberDays: numOfDays,
      deliveryPostcode: postcode
    },
    query:
      'query branchCalendar($deliveryPostcode: String!, $numberDays: Int) {\n  branchCalendar(deliveryPostcode: $deliveryPostcode, numberDays: $numberDays) {\n    date\n    slotAvailable\n    __typename\n  }\n}'
  };
  const response = await fetch('https://www.travisperkins.co.uk/graphql?op=branchCalendar', {
    headers,
    referrer: window.location.href,
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(payload),
    credentials: 'include'
  });

  const jsonData = await response.json();

  return jsonData.data.branchCalendar || {};
};

export const getBasketEntries = async () => {
  const payload = {
    operationName: 'basket',
    variables: {
      basketId: getCookie('travisperkins-cart')
    },
    query: `query basket($basketId: String) {
  basket(basketId: $basketId) {
    ...BasketFields
    __typename
  }
}

fragment BasketFields on Basket {
  id
  code
  basketEntries {
    quantity
    deliveryType
    fulfilmentBranch
    leadTimeDays
    __typename
  }
}`
  };
  const response = await fetch('https://www.travisperkins.co.uk/graphql?op=basket', {
    headers: {
      bruid2: getCookie('_br_uid_2'),
      'content-type': 'application/json',
      'x-tp-request-id': '24fb997c-466b-425f-8bef-e388c5996eab',
      'x-tp-session-id': getCookie('x-tp-session-id')
    },
    referrer: window.location.href,
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(payload),
    credentials: 'include'
  });

  const jsonData = await response.json();
  return jsonData.data.basket || {};
};
