import { getPostcodeFromQFI } from '../helpers/utils';

const postCode = getPostcodeFromQFI();
const staticData = {
  1: [
    `Free Collection from ${postCode}`,
    'Money in your bank within 24 hrs',
    'Guaranteed price paid in full'
  ],
  2: [`Free Collection from ${postCode}`, 'Money in your bank within 24 hrs'],
  3: [`Free Collection from ${postCode}`, 'Money in your bank within 24 hrs']
};

export default staticData;
