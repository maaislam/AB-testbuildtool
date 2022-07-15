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
  'x-tp-session-id': getCookie('x-tp-session-id'),
};

export const isLoggedIn = !!getCookie('access_token');

export const getUser = async () => {
  const response = await fetch('/graphql?op=customer', {
    headers,
    referrer: window.location.href,
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'POST',
    mode: 'cors',
    body: '{"operationName":"customer","variables":{},"query":"query customer {\\n  customer {\\n    ...CustomerFields\\n    __typename\\n  }\\n}\\n\\nfragment CustomerFields on Customer {\\n  code\\n  name\\n  email\\n  customerType\\n  accountStatus\\n  accountNumber\\n  customerTradeType\\n  deliveryPhoneNumbers\\n  ...DeliveryAddressesFields\\n  __typename\\n}\\n\\nfragment DeliveryAddressesFields on Customer {\\n  deliveryAddresses {\\n    id\\n    line1\\n    line2\\n    line3\\n    town\\n    postalCode\\n    deliveryContact {\\n      name\\n      telephone\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}"}',
    credentials: 'include',
  });
  const data = await response.json();
  return data.data.customer;
};
